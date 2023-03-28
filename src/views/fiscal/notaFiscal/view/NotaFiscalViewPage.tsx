// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** Demo Components Imports
import NotaFiscalViewLeft from './NotaFiscalViewLeft'
import NotaFiscalViewRight from './NotaFiscalViewRight'

// ** Third Party Import
import { useTranslation } from 'react-i18next'

interface Props {
  notaFiscalId: string
}

const NotaFiscalViewPage = ({ notaFiscalId }: Props) => {
  // ** Hooks
  const { t } = useTranslation()
  const ability = useContext(AbilityContext)

  if (notaFiscalId) {
    return (    
      <Grid container spacing={6}>
        {ability?.can('read', 'ac-nfse-page') ? (
          <Grid item xs={12} md={5} lg={4}>
            <NotaFiscalViewLeft notaFiscalId={notaFiscalId} />
          </Grid>
        ) : <>{t("You do not have permission to view this resource.")}</>}

        {ability?.can('read', 'ac-nfse-page') ? (
          <Grid item xs={12} md={7} lg={8}>
            <NotaFiscalViewRight notaFiscalId={notaFiscalId} />
          </Grid>
        ) : <>{t("You do not have permission to view this resource.")}</>}
      </Grid>
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