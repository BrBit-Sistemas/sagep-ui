import env from '../../../environment';

const apiNotaFiscal = `${env.API_URL}/fiscal/notaFiscal`

export default {
  listAsync: `${apiNotaFiscal}/list`,
  viewAsync: `${apiNotaFiscal}/view`,
  storageTokenKeyName: 'accessToken'
}