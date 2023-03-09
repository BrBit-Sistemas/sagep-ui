export type NotaFiscalLayoutType = {
  id: string
}

export type FornecedorType = {
  id?: string
  razaoSocial: string
  cnpj?: string
  cpf?: string
  inscricaoMunicipal?: string
  endereco: string
  numero: string
  complemento?: string
  bairro: string
  codigoMunicipio: number
  uf: string
  cep: string
  telefone?: string
  email?: string
}

export type NotaFiscalStatusType = {
  id?: string
  name: string
  color: string
}

export type ServicoType = {
  id?: string
  //colocar servico
}

export type NotaFiscalType = {
    id?: string
    numeroNotaFiscal: number
    tenantId: string
    fornecedorId: string
    fornecedor: FornecedorType
    notaFiscalStatusId: string
    notaFiscalStatus: NotaFiscalStatusType
    codigoChamada: string
    mesChamada: string
    codigoEmpresa: number
    codigoConvenio: number
    competencia: Date | string
    informacoesComplementares: string
    codigoCancelamento: string
    valorServico: string
    servico: Array<ServicoType>
}