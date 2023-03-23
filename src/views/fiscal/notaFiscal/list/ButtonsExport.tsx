import { Dispatch, SetStateAction, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Download, FilePdfBox, NoteCheckOutline } from 'mdi-material-ui';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

interface ButtonsExportProps {
    selectedId: string
}

const ButtonsExport = (props: ButtonsExportProps) => {

    function downloadPfd() {
        console.log("pdf nota id: "+selectedId);
    }
    function downloadXml() {
        console.log("xml nota id: "+selectedId);
    }

  // ** Props
  const { selectedId } = props

  //** popover
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
        <Tooltip title="Exportar">
            <IconButton aria-describedby={id} onClick={handleClick} size="small">
              <Download fontSize='small' />
            </IconButton>
          </Tooltip>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Typography sx={{ p: 2 }}>
              <div>
                <Tooltip title="Download PDF">
                  <IconButton onClick={downloadPfd}>
                    <FilePdfBox fontSize='small' />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Download XML">
                  <IconButton onClick={downloadXml}>
                    <NoteCheckOutline fontSize='small' />
                  </IconButton>
                </Tooltip>
              </div>
            </Typography>

        </Popover>
    </>
  )
  
}

export default ButtonsExport