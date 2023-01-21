// ** React Imports
import { Fragment, ReactNode } from 'react'

// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

interface FooterIllustrationsV2Prop {
  image?: ReactNode
}

const LineImg = styled('img')(({ theme }) => ({
  minWidth: '150%',
  minHeight: '100%',
  position: 'absolute',
  left: '0',
  bottom: '0',
  [theme.breakpoints.down('lg')]: {
    left: 0,
    bottom: 0
  }
}))

const FooterIllustrationsV2 = (props: FooterIllustrationsV2Prop) => {
  // ** Hook
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  if (!hidden) {
    return (
      <LineImg alt='Linhas' src='/images/svg/pattern-1.svg' />
    )
  } else {
    return null
  }
}

export default FooterIllustrationsV2
