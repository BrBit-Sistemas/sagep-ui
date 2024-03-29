// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'

// Import Translate
import { useTranslation } from 'react-i18next'

// Styled Grid component
const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    order: -1,
    display: 'flex',
    justifyContent: 'center'
  }
}))

// Styled component for the image
const Img = styled('img')(({ theme }) => ({
  right: 30,
  bottom: 0,
  height: 230,
  position: 'absolute',
  [theme.breakpoints.down('sm')]: {
    height: 165,
    position: 'static'
  }
}))

const BoasVindas = () => {
  const { t } = useTranslation()

  return (
    <Card sx={{ position: 'relative', overflow: 'visible', mt: { xs: 0, sm: 7.5, md: 0 } }}>
      <CardContent sx={{ p: theme => `${theme.spacing(8.25, 7.5, 6.25, 7.5)} !important` }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12}>
            <Typography variant='h5' sx={{ mb: 6.5 }}>
              {'Bem-vindo aos infográficos e indicadores '}{' '}
              <Box component='span' sx={{ fontWeight: 'bold' }}>
                {'Gerais'}
              </Box>
            </Typography>
            <Typography variant='body2'>{t('Here you can check the active users on the platform')}.</Typography>
          </Grid>
          <StyledGrid item xs={12} sm={6}>
            <Img src='/images/cards/dashboard.png' />
          </StyledGrid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BoasVindas
