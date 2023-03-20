import { ThemeColor } from 'src/@core/layouts/types'

export type UserLayoutType = {
    id: string | undefined
}

export type TenantType = {
    apiKey: string
    nome: string
    nomeExibicao: string
    telefone: string
    emailPrincipal: string   
    avatarColor?: ThemeColor
}