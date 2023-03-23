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

// ** form Imports
import { useForm, Controller } from 'react-hook-form'

import { statusName } from 'src/@core/utils/enum/fiscal';
import { NotaFiscalFiltersForm } from 'src/types/fiscal/notaFiscal/notaFiscalTypes';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

interface ModalExportProps {
    openModalExport: boolean
  setOpenModalExport: Dispatch<SetStateAction<boolean>>
}

const ModalExport = (props: ModalExportProps) => {

  // ** Props
  const { openModalExport, setOpenModalExport } = props

  const {
    reset,
    control,
    handleSubmit,
  } = useForm()
  const onSubmit = (data: NotaFiscalFiltersForm) => {
      if(!data.exportType) data.exportType = "pdf"
      console.log(data)
      reset()
      console.log("exportando lista inteira");
      //enviar para o backend
      setOpenModalExport(false);
  }

  return (
    
    <Dialog 
        open={openModalExport}
        scroll='body'
        fullWidth
        maxWidth='sm'
        onClose={() => {reset(); setOpenModalExport(false)}}
    >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => {reset(); setOpenModalExport(false)}}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='competencia_from'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        type="date"
                        label='Competência - De'
                        InputLabelProps={{shrink: true}}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='competencia_to'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        type="date"
                        label='Competência - Até'
                        InputLabelProps={{shrink: true}}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='notaFiscalStatusId'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <>
                      <InputLabel id="status-select-label">Status</InputLabel>
                      <Select
                        labelId="status-select-label"
                        label="Status"
                        value={value}
                        onChange={onChange}
                      >
                        {statusName.map((status, key) => 
                          <MenuItem value={key}>{key === 0 ? 'Todos' : status}</MenuItem>
                        )}
                      </Select>
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='numeroNotaFiscal'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label='N da nota'
                        type="number"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='codigoChamada'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label='Cód. da chamada'
                        type="number"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='mesChamada'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label='Mês da chamada'
                        type="month"
                        InputLabelProps={{shrink: true}}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='codigoEmpresa'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label='Cód. da empresa'
                        type="number"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <Controller
                    name='codigoConvenio'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <TextField
                        value={value}
                        onChange={onChange}
                        label='Cód. do convênio'
                        type="number"
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name='exportType'
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <>
                        <FormLabel id="radio-exportType-label">Tipo de arquivos</FormLabel>
                        <RadioGroup
                          aria-labelledby="radio-exportType-label"
                          name="exportType"
                          defaultValue="pdf"
                          value={value}
                          onChange={onChange}
                          sx={{ flexWrap: 'nowrap', flexDirection: 'row' }}
                        >
                          <FormControlLabel value="pdf" control={<Radio />} label="PDF's" sx={{ width: 'auto' }} />
                          <FormControlLabel value="xml" control={<Radio />} label="XML's" />
                        </RadioGroup>
                      </>
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs="auto">
                <Button size='large' type='submit' variant='contained'>
                  Exportar lista
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
    </Dialog>
  )
  
}

export default ModalExport
