// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Demo Components Imports
// import NfseViewLeft from 'src/views/negocios/comercial/nfse/view/NfseViewLeft'
// import NfseViewRight from 'src/views/negocios/comercial/nfse/view/NfseViewRight'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'

interface Props {
    nfseId: string
}

const NfseViewPage = ({ nfseId }: Props) => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  
  if (nfseId) {
    return (    
      <Grid container spacing={6}>
        {ability?.can('read', 'ac-nfse-page') ? (
          <Grid item xs={12} md={5} lg={4}>
            {/* <NfseViewLeft id={nfseId} /> */}
          </Grid>
        ) : <>{defaultMessages.permission}</>}

        {ability?.can('read', 'ac-nfse-page') ? (
          <Grid item xs={12} md={7} lg={8}>
            {/* <NfseViewRight id={nfseId} /> */}
          </Grid>
        ) : <>{defaultMessages.permission}</>}
      </Grid>
    )
  } else {
    return null
  }
}

NfseViewPage.acl = {
  action: 'read',
  subject: 'ac-nfse-page'
}

export default NfseViewPage