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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

interface ModalEmailProps {
    openModalEmail: boolean
  setOpenModalEmail: Dispatch<SetStateAction<boolean>>
}

const ModalEmail = (props: ModalEmailProps) => {

  // ** Props
  const { openModalEmail, setOpenModalEmail  } = props

  return (
    
    <Dialog 
        open={openModalEmail}
        scroll='body'
        fullWidth
        maxWidth='sm'
        onClose={() => setOpenModalEmail(false)}
    >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setOpenModalEmail(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ mb: 8 }}>
            <Typography variant='h5'>
              Exportar lista de nfse's.
            </Typography>
            <Typography variant='body2'>Selecione os filtros para buscar a lista</Typography>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6} sx={{ mb: 4 }}>
              <TextField label="Competência - De" variant="outlined" type="date" fullWidth InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item xs={6} sx={{ mb: 4 }}>
              <TextField label="Competência - Até" variant="outlined" type="date" fullWidth InputLabelProps={{shrink: true}} />
            </Grid>
            <Grid item xs={6} sx={{ mb: 4 }}>
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  label="Status"
                >
                  <MenuItem value={10}>status</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ mb: 4 }}>
            </Grid>
          </Grid>
        </DialogContent>
    </Dialog>
  )
  
}

export default ModalEmail
