import { Dispatch, SetStateAction } from 'react';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import DialogConfirm from 'src/@core/components/dialog/DialogConfirm';

interface ModalSendProps {
    openDialogSend: boolean
    setOpenDialogSend: Dispatch<SetStateAction<boolean>>
    selectedId: string
}

const ModalSend = (props: ModalSendProps) => {

    function sendSend() {
        console.log("Gerar nota id: "+selectedId);
        //enviar para o backend
        setOpenDialogSend(false);
        toast.success("Gerada com sucesso!");
    }

  // ** Props
  const { openDialogSend, setOpenDialogSend, selectedId } = props

  return (
    <DialogConfirm 
        openDialogConfirm={openDialogSend} 
        setOpenDialogConfirm={setOpenDialogSend} 
        title="Gerar nota" 
        text="Tem certeza que deseja enviar e gerar a nota?"
        btnText="Enviar e gerar"
        btnAction={sendSend}
    />
  )
  
}

export default ModalSend