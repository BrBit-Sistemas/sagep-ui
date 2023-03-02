import env from '../../../environment';

const apiNfse = `${env.API_URL}/nfse`

export default {
  listAsync: `${apiNfse}/list`,
  addAsync: `${apiNfse}/create`,
  storageTokenKeyName: 'accessToken'
}