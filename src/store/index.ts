// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import usuario from 'src/store/sistema/controle-acesso/usuario'
import role from 'src/store/sistema/controle-acesso/role'
import grupo from 'src/store/sistema/controle-acesso/grupo'
import notaFiscal from 'src/store/fiscal/notaFiscal/index'

export const store = configureStore({
  reducer: {
    usuario,
    role,
    grupo,
    notaFiscal
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>