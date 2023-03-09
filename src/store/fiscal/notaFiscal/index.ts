// ** Redux Imports
import { Dispatch } from 'redux'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

// ** Api Services
import nfseApiService from 'src/@api-center/fiscal/notaFiscal/notaFiscalApiService'

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
export const fetchData = createAsyncThunk('/api/fiscal/notaFiscal/list', async (params: DataParams) => {
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