import { Dispatch, SetStateAction } from 'react';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import DialogConfirm from 'src/@core/components/dialog/DialogConfirm';

interface ModalSyncProps {
    openDialogSync: boolean
    setOpenDialogSync: Dispatch<SetStateAction<boolean>>
    selectedId: string
}

const ModalSync = (props: ModalSyncProps) => {

    function sendSync() {
        console.log("sincronizar nota id: "+selectedId);
        //enviar para o backend
        setOpenDialogSync(false);
        toast.success("Sincronizado com sucesso!");
    }

  // ** Props
  const { openDialogSync, setOpenDialogSync, selectedId } = props

  return (
    <DialogConfirm 
        openDialogConfirm={openDialogSync} 
        setOpenDialogConfirm={setOpenDialogSync} 
        title="Sincronizar nota" 
        text="Deseja enviar a nota para sincronização?"
        btnText="Enviar e sincronizar"
        btnAction={sendSync}
    />
  )
  
}

export default ModalSync