// ** React Imports
import { useState, SyntheticEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TabPanel from '@mui/lab/TabPanel'
import TabList from '@mui/lab/TabList'
import MuiTab, { TabProps } from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'

// ** Icons Imports
import FileDocumentEditOutline from 'mdi-material-ui/FileDocumentEditOutline'

// ** Custom Components Imports
import NotaFiscalServicoTableListToView from 'src/views/fiscal/notaFiscal/servico/list/NotaFiscalServicoTableListToView'
import { useTranslation } from 'react-i18next'

interface Props {
  notaFiscalId: string
}

// ** Styled Tab component
const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  minHeight: 48,
  flexDirection: 'row',
  '& svg': {
    marginBottom: '0 !important',
    marginRight: theme.spacing(3)
  }
}))

const ClienteViewRight = ({ notaFiscalId }: Props) => {
  // ** State
  const [value, setValue] = useState<string>('servicos')
  const { t } = useTranslation()

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        variant='scrollable'
        scrollButtons='auto'
        onChange={handleChange}
        aria-label='forced scroll tabs example'
        sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
      >
        <Tab value='servicos' label="Serviços" icon={<FileDocumentEditOutline />} />v
      </TabList>
      <Box sx={{ mt: 6 }}>
        <TabPanel sx={{ p: 0 }} value='servicos'>
          <NotaFiscalServicoTableListToView notaFiscalId={notaFiscalId} />
        </TabPanel>
      </Box>
    </TabContext>
  )
}

ClienteViewRight.acl = {
  action: 'read',
  subject: 'ac-cliente-page'
}

export default ClienteViewRight