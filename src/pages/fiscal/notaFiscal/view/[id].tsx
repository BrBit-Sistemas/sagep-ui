import { useRouter } from 'next/router'
import NotaFiscalViewPage from 'src/views/fiscal/notaFiscal/view/NotaFiscalViewPage'

const NotaFiscalViewRoute = () => {
  const router = useRouter()
  const { id } = router.query

  return <NotaFiscalViewPage notaFiscalId={String(id)}/>
}

// ** Controle de acesso da página
// ** Usuário deve possuir a habilidade para ter acesso a esta página
NotaFiscalViewRoute.acl = {
  action: 'read',
  subject: 'ac-nfse-page'
}

export default NotaFiscalViewRoute