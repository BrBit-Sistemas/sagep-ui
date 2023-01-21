// ** React Imports
//import { useState, ReactNode, MouseEvent } from 'react'
import { useState, ReactNode } from 'react'

// ** MUI Components
// import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'

// import Divider from '@mui/material/Divider'

import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Typography, { TypographyProps } from '@mui/material/Typography'
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel'

// ** Icons Imports
// import Google from 'mdi-material-ui/Google'
// import Github from 'mdi-material-ui/Github'
// import Twitter from 'mdi-material-ui/Twitter'
// import Facebook from 'mdi-material-ui/Facebook'
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'

// import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const RightWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    width: '100%'
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(1)
  }
}))

const StyleSagep = styled('span')(({ theme }) => ({
  fontWeight: 400,
  letterSpacing: 0,
  fontSize: '2rem !important',
  color: "#FFF"
}))

const StyleWeb = styled('span')(({ theme }) => ({
  fontWeight: 300,
  letterSpacing: 0,
  fontSize: '2rem !important',
  color: "#ffc241"
}))

const StyleSistemaPrisional = styled('span')(({ theme }) => ({
  lineHeight: 1,
  opacity: 0.5,
  color: "#ffc241"
}))

const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { mt: theme.spacing(8) }
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string()
            .email()
            .required("E-mail é requerido"),
  password: yup.string()
               .min(6, "Senha requer no mínimko 6 caracteres")
               .required("Senha é requerida")
})

const defaultValues = {
  password: '',
  email: ''
}

interface FormData {
  email: string
  password: string
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  
  // const bgClasses = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: FormData) => {
    const { email, password } = data
    auth.login({ email, password }, () => {
      setError('email', {
        type: 'manual',
        message: 'E-mail/Senha inválidos'
      })
    })
  }
  
  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ backgroundColor: "#2B4C81", flex: 1, display: 'flex', position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant='h4'
            sx={{
              ml: 2,
              lineHeight: 1,
              letterSpacing: 5.2,
              fontWeight: 900,
              fontSize: '2rem !important',
              color: "#FFF"
            }}
          >
            Seja bem vindo ao <StyleSagep>Sagep</StyleSagep><StyleWeb>Web</StyleWeb>
            <Typography
              variant='h4'
              sx={{
                mt: 2,
                ml: 0,
                lineHeight: 1,
                fontWeight: 300,
                fontSize: '1rem !important',
                color: "#7290bf"
              }}
            >
              Sistema de Segurança Pública voltado à gestão do <StyleSistemaPrisional>SISTEMA PRISIONAL</StyleSistemaPrisional>
            </Typography>
          </Typography>
          {/* <LoginIllustrationWrapper>
            <LoginIllustration
              alt='login-illustration'
              src={`/images/pngs/police-2.png`}
            />
          </LoginIllustrationWrapper> */}
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
        <Box
          sx={{
            p: 12,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.paper'
          }}
        >
          <BoxWrapper>
            <Box
              sx={{
                top: 30,
                left: 40,
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Img height='38' alt='SagepWeb' src='/images/logo.png' />
              <Typography
                variant='h4'
                sx={{
                  mt: 0,
                  ml: 2,
                  lineHeight: 1,
                  fontWeight: 400,
                  fontSize: '1.5rem !important',
                  color: "#FFF"
                }}
              >
                Sagep
              </Typography>
              <Typography
                variant='h4'
                sx={{
                  mt: 0,
                  ml: 0,
                  lineHeight: 1,
                  fontWeight: 300,
                  fontSize: '1.5rem !important',
                  color: "#ffc241"
                }}
              >
                Web
              </Typography>
            </Box>
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h2'>👮‍♂️ Login!</TypographyStyled>
              <Typography variant='body2'>Faça login na sua conta e garanta seu acesso | 🔐</Typography>
            </Box>
            {/* <Alert icon={false} sx={{ py: 3, mb: 6, ...bgClasses.primaryLight, '& .MuiAlert-message': { p: 0 } }}>
              <Typography variant='caption' sx={{ mb: 2, display: 'block', color: 'primary.main' }}>
                Admin: <strong>admin@materio.com</strong> / Pass: <strong>admin</strong>
              </Typography>
              <Typography variant='caption' sx={{ display: 'block', color: 'primary.main' }}>
                Client: <strong>client@materio.com</strong> / Pass: <strong>client</strong>
              </Typography>
            </Alert> */}
            <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
              <FormControl fullWidth sx={{ mb: 4 }}>
                <Controller
                  name='email'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <TextField
                      autoFocus
                      label='E-mail'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      error={Boolean(errors.email)}
                      placeholder='Informe seu e-mail'
                    />
                  )}
                />
                {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
              </FormControl>
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                  Senha
                </InputLabel>
                <Controller
                  name='password'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <OutlinedInput
                      value={value}
                      onBlur={onBlur}
                      label='Password'
                      onChange={onChange}
                      id='auth-login-v2-password'
                      error={Boolean(errors.password)}
                      placeholder='Informe sua senha'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.password && (
                  <FormHelperText sx={{ color: 'error.main' }} id=''>
                    {errors.password.message}
                  </FormHelperText>
                )}
              </FormControl>
              <Box
                sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
              >
                <FormControlLabel control={<Checkbox />} label='Lembra-me?' />
                {/* <Link passHref href='/forgot-password'>
                  <LinkStyled>Esqueceu sua senha?</LinkStyled>
                </Link> */}
              </Box>
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 7 }}>
                Entrar
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* <Typography variant='body2' sx={{ mr: 2 }}>
                  Novo na Box Tecnologia?
                </Typography>
                <Typography variant='body2'>
                  <Link passHref href='/register'>
                    <LinkStyled>Crie sua conta</LinkStyled>
                  </Link>
                </Typography> */}
              </Box>
              {/* <Divider sx={{ my: 5 }}>or</Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                    <Facebook sx={{ color: '#497ce2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                    <Twitter sx={{ color: '#1da1f2' }} />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                    <Github
                      sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                    />
                  </IconButton>
                </Link>
                <Link href='/' passHref>
                  <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                    <Google sx={{ color: '#db4437' }} />
                  </IconButton>
                </Link>
              </Box> */}
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

LoginPage.guestGuard = true

export default LoginPage
