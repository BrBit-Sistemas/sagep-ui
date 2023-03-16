// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// ** Import Toast
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next';
import { Download, } from 'mdi-material-ui';

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Hook
  const { t } = useTranslation()


  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end' }}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          sx={{ mr: 4, mb: 2 }}
          placeholder="Buscar Nfse"
          onChange={e => handleFilter(e.target.value)}
        />

        <Link href={`/fiscal/notaFiscal/view/`} passHref>
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            <Download fontSize='small' sx={{ mr: 2 }} />
            {t("Exportar")}

          </Button>
        </Link>
      </Box>
    </Box>
  )
  
}

export default TableHeader
