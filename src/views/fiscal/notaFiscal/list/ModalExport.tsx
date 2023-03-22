import { Dispatch, SetStateAction } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { FilePdfBox, NoteCheckOutline, Close } from 'mdi-material-ui';

// ** Import Toast
import 'react-toastify/dist/ReactToastify.css';

import { statusName } from 'src/@core/utils/enum/fiscal';

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
        fullWidth
        maxWidth='sm'
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
          <Box sx={{ mb: 8 }}>
            <Typography variant='h5'>
              Exportar lista de nfse's.
            </Typography>
            <Typography variant='body2'>Selecione os filtros para buscar a lista</Typography>
          </Box>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Competência - De" variant="outlined" type="date" fullWidth InputLabelProps={{shrink: true}}/>
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Competência - Até" variant="outlined" type="date" fullWidth InputLabelProps={{shrink: true}} />
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  label="Status"
                >
                  {statusName.map((status, key) => 
                    <MenuItem value={key}>{key === 0 ? 'Todos' : status}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="N da nota" variant="outlined" fullWidth type="number" />
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Cód. da chamada" variant="outlined" fullWidth type="number" />
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Mês da chamada" variant="outlined" fullWidth type="month" InputLabelProps={{shrink: true}} />
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Cód. da empresa" variant="outlined" fullWidth type="number" />
            </Grid>
            <Grid item xs={6} sx={{ mb: 2 }}>
              <TextField label="Cód. do convênio" variant="outlined" fullWidth type="number" />
            </Grid>
            <Grid item xs="auto">
              <Button sx={{ mb: 2 }} variant='contained'>
                <FilePdfBox fontSize='small' sx={{ mr: 2 }} />Exportar PDF's
              </Button>
            </Grid>
            <Grid item xs="auto">
              <Button sx={{ mb: 2 }} variant='contained'>
                <NoteCheckOutline fontSize='small' sx={{ mr: 2 }} />Exportar XML's
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
    </Dialog>
  )
  
}

export default ModalExport
