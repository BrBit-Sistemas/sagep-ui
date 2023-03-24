import { Dispatch, SetStateAction, useRef, useEffect } from 'react';
import React from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Close } from 'mdi-material-ui';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { Button } from '@mui/material';
import input from 'src/@core/theme/overrides/input';

interface ModalEmailProps {
    openModalEmail: boolean
    setOpenModalEmail: Dispatch<SetStateAction<boolean>>
    selectedId: string
}

const ModalEmail = (props: ModalEmailProps) => {

    function sendEmail() {
        console.log("Enviar email nota id: "+selectedId);
        //enviar para o backend
        setOpenModalEmail(false);
        toast.success("Enviada com sucesso!");
    }

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
      
    return (

        <Dialog
            open={openModalEmail}
            scroll='body'
            fullWidth
            maxWidth='xs'
            onClose={() => setOpenModalEmail(false) }
        >
            <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 4.5 }, position: 'relative' }}>
                <IconButton
                    size='small'
                    onClick={() => setOpenModalEmail(false) }
                    sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
                >
                    <Close />
                </IconButton>
                <Box sx={{ mb: 8 }}>
                    <Typography variant='h5'>
                        Enviar nota por e-mail
                    </Typography>
                </Box>
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
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default ModalEmail;
