import { Dispatch, SetStateAction } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// ** Import Toast
import 'react-toastify/dist/ReactToastify.css';
import { Download, } from 'mdi-material-ui';

interface TableHeaderProps {
  value: string
  toggle: Dispatch<SetStateAction<boolean>>
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {

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

        <div>
          <Button sx={{ mb: 2 }} onClick={() => toggle(true)} variant='contained'>
            <Download fontSize='small' sx={{ mr: 2 }} />Exportar
          </Button>
        </div>
      </Box>
    </Box>
  )
  
}

export default TableHeader
