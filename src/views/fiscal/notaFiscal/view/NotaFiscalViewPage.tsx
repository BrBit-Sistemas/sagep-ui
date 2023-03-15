// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'

interface Props {
  notaFiscalId: string
}

const NotaFiscalViewPage = ({ notaFiscalId }: Props) => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  
  if (notaFiscalId) {
    return (    
      <>
        {ability?.can('read', 'ac-nfse-page') ? (
          <Grid item xs={12} md={5} lg={4}>
              <p>Teste</p>
          </Grid>
        ) : <>{defaultMessages.permission}</>}
      </>
    )
  } else {
    return null
  }
}

NotaFiscalViewPage.acl = {
  action: 'read',
  subject: 'ac-nfse-page'
}

export default NotaFiscalViewPage