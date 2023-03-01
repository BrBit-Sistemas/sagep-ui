// ** Types
import { ThemeColor } from 'src/@core/layouts/types'

export type DetentoLayoutType = {
  id: string
}

export type DetentoType = {
  id?: string
  ipen: string
  nome: string
  status: string
  avatarColor?: ThemeColor
}