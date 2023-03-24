import env from '../../../environment';

const apiNotaFiscal = `${env.API_URL}/nfse`

export default {
  listAsync: `${apiNotaFiscal}/list`,
  viewAsync: `${apiNotaFiscal}/listSelected`,
  storageTokenKeyName: 'accessToken'
}