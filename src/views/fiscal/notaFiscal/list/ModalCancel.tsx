import { Dispatch, SetStateAction } from 'react';

// ** Import Toast
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';
import DialogConfirm from 'src/@core/components/dialog/DialogConfirm';

interface ModalCancelProps {
    openDialogCancel: boolean
    setOpenDialogCancel: Dispatch<SetStateAction<boolean>>
    selectedId: string
}

const ModalCancel = (props: ModalCancelProps) => {

    function sendCancel() {
        console.log("cancelar nota id: "+selectedId);
        //enviar para o backend
        setOpenDialogCancel(false);
        toast.success("Cancelada com sucesso!");
    }

  // ** Props
  const { openDialogCancel, setOpenDialogCancel, selectedId } = props

  return (
    <DialogConfirm 
        openDialogConfirm={openDialogCancel} 
        setOpenDialogConfirm={setOpenDialogCancel} 
        title="Cancelar nota" 
        text="Tem certeza que deseja cancelar a nota?"
        btnText="Enviar e cancelar"
        btnAction={sendCancel}
        btnColor="error"
    />
  )
  
}

export default ModalCancel