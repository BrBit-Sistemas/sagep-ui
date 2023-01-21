// ** MUI Imports
import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// ** Styled Components
const MenuUserWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
  backgroundColor: "#000",
}))

const ImgCard = styled('img')(({ theme }) => ({
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
  maxWidth: '48rem',
  zIndex: 1,
  opacity: 0.9,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '35rem'
  }
}))

const UnidadeLogada = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 120,
  left: 95,
  color: "#FFF",
  fontWeight: 700,
  fontSize: 13,
  zIndex: 3,
  textShadow: '1px 1px #000'
}))

const UsuarioLogado = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 140,
  left: 95,
  fontWeight: 400,
  lineHeight: 'normal',
  color: "#ffc241",
  fontSize: 14,
  zIndex: 3,
  textShadow: '1px 1px #000',
}))

const UsuarioFotoPerfil = styled('img')(({ theme }) => ({
  position: 'absolute',
  left: 30,
  zIndex: 3,
  height: 50,
  borderRadius: '50%'
}))

const BackgroundImage = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  opacity: 0.3,
  backgroundColor: '#3060AF',
  width: 260,
  height: 150,
  zIndex: 2
}))

const usuarioLogado = "Alan Rezende"
const unidadeLogada = "PRESÍDIO CRICÚMA"

const VerticalNavUser = () => {
  return (
    <MenuUserWrapper className='nav-header' sx={{ pl: 0, mb: 5 }}>
      <ImgCard height='150' alt='SagepWeb' src='/images/card-backgrounds/cover-5-lg.png' />
      <BackgroundImage />
      <UnidadeLogada>{unidadeLogada}</UnidadeLogada>
      <UsuarioLogado>{usuarioLogado}</UsuarioLogado>
      <UsuarioFotoPerfil alt='Foto perfil usuário' src='/images/avatars/avatar_hipster.jpg' />
    </MenuUserWrapper>
  )
}

export default VerticalNavUser
