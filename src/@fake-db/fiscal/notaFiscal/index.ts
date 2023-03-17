// ** Mock Adapter
import axios, { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter';

const useMock = (axios: AxiosInstance) => {
  const mock = new MockAdapter(axios);

  mock.onGet('/fiscal/notaFiscal/list').reply(config => {
    /*const { q = '', column = '', sort = '' } = config.params
    const queryLowered = q.toLowerCase()
  
    // @ts-ignore
    const dataAsc = data.sort((a, b) => (a[column] < b[column] ? -1 : 1))
  
    const dataToFilter = sort === 'asc' ? dataAsc : dataAsc.reverse()
  
    const filteredData = dataToFilter.filter(
      (item: NotaFiscalRowType) =>
        item.id.toString().toLowerCase().includes(queryLowered) ||
        item.numeroNotaFiscal?.toString().toLowerCase().includes(queryLowered) ||
        item.fornecedor.razaoSocial.toLowerCase().includes(queryLowered) ||
        item.fornecedor.cnpj?.toLowerCase().includes(queryLowered) ||
        item.fornecedor.cpf?.toLowerCase().includes(queryLowered) ||
        item.notaFiscalStatus.name.toLowerCase().includes(queryLowered) ||
        item.codigoChamada.toString().toLowerCase().includes(queryLowered) ||
        item.mesChamada.toLowerCase().includes(queryLowered) ||
        item.codigoEmpresa.toString().toLowerCase().includes(queryLowered) ||
        item.codigoConvenio.toString().toLowerCase().includes(queryLowered) ||
        item.competencia.toString().toLowerCase().includes(queryLowered) ||
        item.valorServicos.toLowerCase().includes(queryLowered)
    )*/
  
    return [
      200,
      {
        allData: data,
        total: data.length,
        data: data
      }
    ]
  })
};

export default useMock;

// ** Types Imports
import { NotaFiscalRowType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

const data: NotaFiscalRowType[] = [
  {
    id: '1',
    numeroNotaFiscal: 123,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '09/03/2023',
    valorServicos: 'R$ 1.200,00'
  },
  {
    id: '2',
    numeroNotaFiscal: 124,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 2',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 3,
    notaFiscalStatus: {
      name: 'Cancelada',
      color: 'error',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 2.000,00'
  },
  {
    id: '3',
    numeroNotaFiscal: 125,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 1,
    notaFiscalStatus: {
      name: 'Não Enviada',
      color: 'warning',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 10.000,00'
  },
  {
    id: '4',
    numeroNotaFiscal: 126,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 1.000,00'
  },
  {
    id: '5',
    numeroNotaFiscal: 127,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 1.000,00'
  },
  {
    id: '6',
    numeroNotaFiscal: 128,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 1.000,00'
  },
  {
    id: '7',
    numeroNotaFiscal: 129,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 1.000,00'
  },
  {
    id: '8',
    numeroNotaFiscal: 130,
    fornecedor: {
      razaoSocial: 'Nome Fornecedor 3',
      cnpj: '18144210000119',
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '08/03/2023',
    valorServicos: 'R$ 1.000,00'
  },
]