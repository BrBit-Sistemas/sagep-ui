export type NfseLayoutType = {
  id: string
}

export type NfseType = {
    id_nfse?: string
    IdentificacaoNfse_Numero: string
    prestador_id_prestador: string
    tomador_id_tomador: string
    status_id_status: string
    code_attendance: string
    month_attendance: string
    id_company: number
    id_contract: number
    Competencia: Date | string
    InformacoesComplementares: string
    CodigoCancelamento: string
}