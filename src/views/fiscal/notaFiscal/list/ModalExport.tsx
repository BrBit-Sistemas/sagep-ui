import { Dispatch, SetStateAction } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Close } from 'mdi-material-ui';

// ** Import Toast
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';

interface ModalExportProps {
    openModalExport: boolean
  setOpenModalExport: Dispatch<SetStateAction<boolean>>
}

const ModalExport = (props: ModalExportProps) => {

  // ** Props
  const { openModalExport, setOpenModalExport } = props

  return (
    
    <Dialog 
        open={openModalExport}
        scroll='body'
        onClose={() => setOpenModalExport(false)}
    >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setOpenModalExport(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ mb: 4, textAlign: 'center' }}>
            <Typography variant='h5' sx={{ mb: 3 }}>
              teste
            </Typography>
            <Typography variant='body2'>texto teste</Typography>
          </Box>
        </DialogContent>
    </Dialog>
  )
  
}

export default ModalExport
