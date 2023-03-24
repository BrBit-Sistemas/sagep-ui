import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import React from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Close } from 'mdi-material-ui';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

<<<<<<< HEAD
import { Button } from '@mui/material';
import input from 'src/@core/theme/overrides/input';
=======
// ** form Imports
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller } from 'react-hook-form'
import { NotaFiscalEmailForm } from 'src/types/fiscal/notaFiscal/notaFiscalTypes';
>>>>>>> 67db511f89a939839e1c5b13b7416e06982d17ac

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
      handleSubmit,
      formState: { errors }
    } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema)
    })
    const onSubmit = (data: NotaFiscalEmailForm) => {
        console.log(data)
        reset()
        console.log("Enviar email nota id: "+selectedId);
        //enviar para o backend
        setOpenModalEmail(false);
        toast.success("Enviada com sucesso!");
    }

<<<<<<< HEAD
    // ** Props
    const { openModalEmail, setOpenModalEmail, selectedId } = props

    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (openModalEmail) {
            setTimeout(() => {
                inputRef.current?.focus()
            }, 0)
        }
    }, [openModalEmail]) // Adicione openModalEmail como dependência
      
=======
>>>>>>> 67db511f89a939839e1c5b13b7416e06982d17ac
    return (

        <Dialog
            open={openModalEmail}
            scroll='body'
            fullWidth
            maxWidth='xs'
<<<<<<< HEAD
            onClose={() => setOpenModalEmail(false) }
=======
            onClose={() => {reset(); setOpenModalEmail(false)}}
>>>>>>> 67db511f89a939839e1c5b13b7416e06982d17ac
        >
            <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 4.5 }, position: 'relative' }}>
                <IconButton
                    size='small'
<<<<<<< HEAD
                    onClick={() => setOpenModalEmail(false) }
=======
                    onClick={() => {reset(); setOpenModalEmail(false)}}
>>>>>>> 67db511f89a939839e1c5b13b7416e06982d17ac
                    sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                >
                    <Close />
                </IconButton>
                <Box sx={{ mb: 8 }}>
                    <Typography variant='h5'>
                        Enviar nota por e-mail
                    </Typography>
                </Box>
<<<<<<< HEAD
                <form onSubmit={(event) => { event.preventDefault(); sendEmail() }}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} sx={{ mb: 2 }}>
                            <TextField inputRef={inputRef} label="E-mail" variant="outlined" required placeholder='exemplo@email.com' fullWidth type="email" InputLabelProps={{ shrink: true }} />
                        </Grid>
                        <Grid item xs="auto">
                            <Button variant='contained' type="submit">
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
=======
                
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
>>>>>>> 67db511f89a939839e1c5b13b7416e06982d17ac
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ModalEmail;
