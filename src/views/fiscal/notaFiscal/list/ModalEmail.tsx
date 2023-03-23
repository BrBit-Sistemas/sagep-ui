import { Dispatch, SetStateAction } from 'react';
import React from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Close } from 'mdi-material-ui';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

// ** form Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

interface ModalEmailProps {
    openModalEmail: boolean
    setOpenModalEmail: Dispatch<SetStateAction<boolean>>
    selectedId: string
}

const schema = yup.object().shape({
    email: yup
      .string()
      .required("E-mail é obrigatório.")
  })

const ModalEmail = (props: ModalEmailProps) => {

    // ** Props
    const { openModalEmail, setOpenModalEmail, selectedId } = props

    const {
      reset,
      control,
      setValue,
      handleSubmit,
      formState: { errors }
    } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema)
    })
    const onSubmit = (data: {email: string}) => {
        console.log(data)
        reset()
        console.log("Enviar email nota id: "+selectedId);
        //enviar para o backend
        setOpenModalEmail(false);
        toast.success("Enviada com sucesso!");
    }

    return (

        <Dialog
            open={openModalEmail}
            scroll='body'
            fullWidth
            maxWidth='xs'
            onClose={() => setOpenModalEmail(false)}
        >
            <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 4.5 }, position: 'relative' }}>
                <IconButton
                    size='small'
                    onClick={() => setOpenModalEmail(false)}
                    sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                >
                    <Close />
                </IconButton>
                <Box sx={{ mb: 8 }}>
                    <Typography variant='h5'>
                        Enviar nota por e-mail
                    </Typography>
                </Box>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth sx={{ mb: 4 }}>
                        <Controller
                            name='email'
                            control={control}
                            rules={{ required: true }}
                            render={({ field: { value, onChange } }) => (
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    placeholder='exemplo@email.com'
                                    error={Boolean(errors.email)}
                                    label='E-mail'
                                />
                            )}
                        />
                        {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size='large' type='submit' variant='contained'>
                            Enviar
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    )

}

export default ModalEmail
