import { useRouter } from 'next/router'
import NfseViewPage from 'src/views/fiscal/nfse/view/NfseViewPage'

const NfseViewRoute = () => {
  const router = useRouter()
  const { id } = router.query

  return <NfseViewPage nfseId={String(id)}/>
}

// ** Controle de acesso da página
// ** Usuário deve possuir a habilidade para ter acesso a esta página
NfseViewRoute.acl = {
  action: 'read',
  subject: 'ac-nfse-page'
}

export default NfseViewRoute