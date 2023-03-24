import { Dispatch, SetStateAction } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Close } from 'mdi-material-ui';

// ** Import Toast
import 'react-toastify/dist/ReactToastify.css';

interface DialogConfirmProps {
    openDialogConfirm: boolean
    setOpenDialogConfirm: Dispatch<SetStateAction<boolean>>
    title: string
    text?: string
    btnText: string
    btnAction: Function
    btnColor?: any
}

const DialogConfirm = (props: DialogConfirmProps) => {

  // ** Props
  const { openDialogConfirm, setOpenDialogConfirm, title, text, btnText, btnAction, btnColor } = props

  return (
    
    <Dialog 
        open={openDialogConfirm}
        scroll='body'
        fullWidth
        maxWidth='xs'
        onClose={() => setOpenDialogConfirm(false)}
    >
        <DialogContent sx={{ px: { xs: 8, sm: 15 }, py: { xs: 8, sm: 12.5 }, position: 'relative' }}>
          <IconButton
            size='small'
            onClick={() => setOpenDialogConfirm(false)}
            sx={{ position: 'absolute', right: '1rem', top: '1rem' }}
          >
            <Close />
          </IconButton>
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant='h5'>
              {title}
            </Typography>
            {!!text && <Typography variant='body2'>{text}</Typography>}
            <Button variant='contained' color={btnColor ? btnColor : 'primary'} onClick={() => btnAction()} sx={{ mt: 8 }}>
                {btnText}
            </Button>
          </Box>
        </DialogContent>
    </Dialog>
  )
  
}

export default DialogConfirm