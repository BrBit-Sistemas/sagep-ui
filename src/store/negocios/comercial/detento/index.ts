// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Api Services
import detentoApiService from 'src/@api-center/negocios/comercial/detento/detentoApiService'

// ** Types
import { DetentoType } from 'src/types/negocios/comercial/detento/detentoTypes'

// ** Toast
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface DataParams {
  q: string
}

interface Redux {
  getState: any
  dispatch: Dispatch<any>
}

// ** Fetch Detentos
export const fetchData = createAsyncThunk('appDetentos/fetchData', async (params: DataParams) => {
  const storedToken = window.localStorage.getItem(detentoApiService.storageTokenKeyName)!
  const response = await axios
                            .get(detentoApiService.listAsync, {
                                  headers: {
                                    Authorization: `Bearer ${storedToken}`
                                  },
                                  params
                            })

  return response.data
})

// ** Add Client
export const addDetentos = createAsyncThunk(
  'appDetentos/addDetentos',
  async (data: DetentoType, { getState, dispatch }: Redux) => {
    const storedToken = window.localStorage.getItem(detentoApiService.storageTokenKeyName)!
    const config = {
      headers: {
        Authorization: `Bearer ${storedToken}`
      }
    }

    axios.post(detentoApiService.addAsync, data, config).then((resp) => {
      dispatch(fetchData(getState().detento.params))

      if (resp.status === 201 && resp.data.message) return toast.success(resp.data.message)
      if (resp.status === 201) return toast.success("Detento criado com sucesso.")
    }).catch((resp) => {
      if (resp.message == 'Network Error') return toast.error("Você não tem permissão para esta ação.")
      if (typeof resp.response.data != 'undefined' && 
          typeof resp.response.data.errors != 'undefined')
      {
        if (typeof resp.response.data.title != 'undefined' &&
            resp.response.data.title === "One or more validation errors occurred.")
        {
          const returnObj = Object.entries(resp.response.data.errors);
          returnObj.forEach((err: any) => {
            toast.error(err[1].toString())
          });
        } else {
          const returnObj = Object.entries(resp.response.data.errors);
          returnObj.forEach((err: any) => {
            toast.error(err.toString())
          });
        }
      } else {
        const returnObj = Object.entries(resp.response.data.errors);
        returnObj.forEach((err: any) => {
          err[1].forEach((ie: any) => {
            toast.error(ie.toString())        
          })
        });
      }
    })
  }
)

export const appDetentosSlice = createSlice({
  name: 'appDetentos',
  initialState: {
    data: [],
    total: 0,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.detentos
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appDetentosSlice.reducer