import { ThemeColor } from 'src/@core/layouts/types'

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
  id?: number
  name: string
  color: ThemeColor
}

export type ServicoType = {
  id?: string
  valorServicos: number
  valorDeducoes?: number
  valorPis?: number
  valorCofins?: number
  valorInss?: number
  valorIr?: number
  valorCsll?: number
  outrasRetencoes?: number
  valorTotalTributos?: number
  valorIss?: number
  aliquota?: number
  descontoIncondicionado?: number
  descontoCondicionado?: number
  isIssRetido: number
  responsavelRetencao?: number
  itemListaServico: string
  codigoCnae?: number
  codigoTributacaoMunicipio?: string
  codigoNbs?: string
  discriminacao: string
  codigoMunicipio: number
  exigibilidadeISS: number
  identificacaoNaoExigibilidade?: string
  municipioIncidencia?: number
  numeroProcesso?: string
  notaFiscalId: string
}

export type NotaFiscalType = {
    id: string
    numeroNotaFiscal?: number
    tenantId: string
    fornecedorId: string
    fornecedor: FornecedorType
    notaFiscalStatusId: number
    notaFiscalStatus: NotaFiscalStatusType
    codigoChamada: string
    mesChamada: string
    codigoEmpresa: number
    codigoConvenio: number
    competencia: Date | string
    informacoesComplementares: string
    codigoCancelamento?: string
    valorServicos: string
    servico: Array<ServicoType>
}

export type NotaFiscalRowType = {
  id: string
  numeroNotaFiscal?: number
  fornecedor: Pick<FornecedorType, 'razaoSocial' | 'cnpj' | 'cpf'>
  notaFiscalStatusId: number
  notaFiscalStatus: Pick<NotaFiscalStatusType, 'name' | 'color'>
  codigoChamada: string
  mesChamada: string
  codigoEmpresa: number
  codigoConvenio: number
  competencia: Date | string
  valorServicos: string
}

export type NotaFiscalEmailForm = {
  email: string
}

export type NotaFiscalFiltersForm = {
  exportType: string
  competencia_from?: string
  competencia_to?: string
  notaFiscalStatusId?: number
  numeroNotaFiscal?: number
  codigoChamada?: string
  mesChamada?: string
  codigoEmpresa?: number
  codigoConvenio?: number
}