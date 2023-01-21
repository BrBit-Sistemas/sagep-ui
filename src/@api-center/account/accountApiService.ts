import env from '../../environment';

const apiAccount = `${env.API_URL}/account`

export default {
  me: `${apiAccount}/me`,
  loginEndpoint: `${apiAccount}/authenticate`,
  logoutEndpoint: `${apiAccount}/logout`,
  storageTokenKeyName: 'accessToken'
}