import env from '../../../../environment';

const apiDetentos = `${env.API_URL}/detentos`

export default {
  listAsync: `${apiDetentos}/list`,
  addAsync: `${apiDetentos}/create`,
  storageTokenKeyName: 'accessToken'
}