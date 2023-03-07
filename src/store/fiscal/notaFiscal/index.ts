// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Api Services
import nfseApiService from 'src/@api-center/fiscal/nfse/nfseApiService'

// ** Types
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

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

// ** Fetch Nfses
export const fetchData = createAsyncThunk('appNfses/fetchData', async (params: DataParams) => {
  const storedToken = window.localStorage.getItem(nfseApiService.storageTokenKeyName)!
  const response = await axios
                            .get(nfseApiService.listAsync, {
                                  headers: {
                                    Authorization: `Bearer ${storedToken}`
                                  },
                                  params
                            })

  return response.data
})

// ** Add Client
export const addNfses = createAsyncThunk(
  'appNfses/addNfses',
  async (data: NotaFiscalType, { getState, dispatch }: Redux) => {
    const storedToken = window.localStorage.getItem(nfseApiService.storageTokenKeyName)!
    const config = {
      headers: {
        Authorization: `Bearer ${storedToken}`
      }
    }

    axios.post(nfseApiService.addAsync, data, config).then((resp) => {
      dispatch(fetchData(getState().nfse.params))

      if (resp.status === 201 && resp.data.message) return toast.success(resp.data.message)
      if (resp.status === 201) return toast.success("Nfse criado com sucesso.")
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

export const appNfsesSlice = createSlice({
  name: 'appNfses',
  initialState: {
    data: [],
    total: 0,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload.nfses
      state.total = action.payload.total
      state.params = action.payload.params
      state.allData = action.payload.allData
    })
  }
})

export default appNfsesSlice.reducer