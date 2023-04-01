// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import BoasVindas from 'src/views/dashboards/publica/BoasVindas'

import UsuarioContainerChartLeft from 'src/views/dashboards/publica/UsuarioContainerChartLeft'
import UsuarioContainerChartRight from 'src/views/dashboards/publica/UsuarioContainerChartRight'

const DashboardPublica = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} sx={{ order: 0, alignSelf: 'flex-end' }}>
          <BoasVindas />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ order: 0 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <UsuarioContainerChartLeft />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ order: 0 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <UsuarioContainerChartRight />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

DashboardPublica.acl = {
  action: 'list',
  subject: 'ac-dashboardPublica-page'
}

export default DashboardPublica
