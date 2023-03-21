// ** IMPORTS

// ** React Imports
import { useContext, useState, useEffect, useCallback } from 'react'



// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import CustomChip from 'src/@core/components/mui/chip'
import Popover from '@mui/material/Popover'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'

import { Cancel, Download, Email, FilePdfBox, NoteCheckOutline, Send, Update, } from 'mdi-material-ui'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Actions Imports
import { fetchData } from 'src/store/fiscal/notaFiscal/index'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { NotaFiscalRowType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

// ** Custom Components Imports
import TableHeader from 'src/views/fiscal/notaFiscal/list/TableHeader'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'
import axios from 'axios'
import useMock from 'src/@fake-db/fiscal/notaFiscal'
import { formatDocument } from 'src/@core/utils/format'
import { status } from 'src/@core/utils/enum/fiscal'
import ModalExport from 'src/views/fiscal/notaFiscal/list/ModalExport'


// **





// ** INTERFACES

interface CellType {
  row: NotaFiscalRowType
}

// **

const defaultColumns = [
  {
    flex: 0.1,
    minWidth: 30,
    field: 'numero',
    headerName: 'Número',
    headerAlign: 'left' as const,
    align: 'left' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              component='a'
              variant='body2'
              sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none' }}
            >
              {row.numeroNotaFiscal}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 100,
    field: 'fornecedor',
    headerName: 'Tomador',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
          <Typography
            noWrap
            component='a'
            variant='body2'
            sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none' }}
          >
            {row.fornecedor.razaoSocial}
          </Typography>
          <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
            📬{formatDocument(row.fornecedor.cpf || row.fornecedor.cnpj)}
          </Typography>
        </Box>
      )
    },
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          skin='light'
          size='small'
          label={row.notaFiscalStatus.name}
          color={row.notaFiscalStatus.color}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    },
  },
  {
    flex: 0.15,
    minWidth: 50,
    field: 'chamada',
    headerName: 'Chamada',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          Cód. {row.codigoChamada} / Mês {row.mesChamada}
        </Typography>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 50,
    field: 'convenio',
    headerName: 'Convênio',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          Empresa {row.codigoEmpresa} / Convênio {row.codigoConvenio}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'competencia',
    headerName: 'Competência',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.competencia.toString()}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'valor',
    headerName: 'Valor Serviços',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.valorServicos}
        </Typography>
      )
    }
  },
]

// **

// ** COMPONENT FUNCIONAL
const NfseList = () => {
  const [openModalExport, setOpenModalExport] = useState(false);

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

  // ** Hooks
  const ability = useContext(AbilityContext)

  // ** State
  const [value, setValue] = useState<string>('')
  const [pageSize, setPageSize] = useState<number>(10)



  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.notaFiscal)

  useEffect(() => {
    dispatch(
      fetchData({
        q: value
      })
    )
  }, [dispatch, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const [listNotaFiscal, setListNotaFiscal] = useState();
  useEffect(() => {
    const client = axios.create();
    useMock(client);
    client.get('/fiscal/notaFiscal/list').then(response => {
      const dataArray = response.data
      console.log(dataArray)
      setListNotaFiscal(dataArray)
    })
  }, []);

  const columns = [
    ...defaultColumns,
    {
      flex: 0.15,
      minWidth: 90,
      sortable: false,
      field: 'actions',
      headerName: 'Ações',
      headerAlign: 'center' as const,
      align: 'right' as const,
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

          {row.notaFiscalStatusId === status.sent && (
            <>
            <div>
              <Tooltip title="Sincronizar">
                <IconButton>
                  <Update fontSize='small' />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Tooltip title="Cancelar">
                <IconButton>
                  <Cancel fontSize='small' />
                </IconButton>
              </Tooltip>
            </div>
          </>
          )}

          {row.notaFiscalStatusId === status.pending &&
            <div>
              <Tooltip title="Enviar NFS-e">
                <IconButton>
                  <Send fontSize='small' />
                </IconButton>
              </Tooltip>
            </div>}

          <Link href={`/fiscal/notaFiscal/view/${row.id}`} passHref>
            <Tooltip title="Ver">
              <IconButton>
                <EyeOutline fontSize='small' />
              </IconButton>
            </Tooltip>
          </Link>
          
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
                <Tooltip title="PDF">
                  <IconButton>
                    <FilePdfBox fontSize='small' />
                  </IconButton>
                </Tooltip>

                <Tooltip title="XML">
                  <IconButton>
                    <NoteCheckOutline fontSize='small' />
                  </IconButton>
                </Tooltip>
              </div>
            </Typography>

          </Popover>

          <div>
            <Tooltip title="Enviar por E-mail">
              <IconButton>
                <Email fontSize='small' />
              </IconButton>
            </Tooltip>
          </div>

        </Box>
      )
    }
  ]

  return (
    <>
    <Grid container spacing={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader
            title={<Typography variant='h5'>Notas Fiscais de Serviço eletrônicas</Typography>}
            subtitle={<Typography variant='body2'>Lista NFS-e's.</Typography>}
          />
        </Grid>
        {ability?.can('list', 'ac-nfse-page') ? (
          <Grid item xs={12}>
            <Card>
              <TableHeader toggle={setOpenModalExport} value={value} handleFilter={handleFilter} />
              <DataGrid
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                autoHeight
                //rows={store.data}
                //@ts-ignore
                rows={listNotaFiscal?.data}
                columns={columns}
                pageSize={pageSize}
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                rowsPerPageOptions={[10, 25, 50]}
                onPageSizeChange={(newPageSize: number) => setPageSize(newPageSize)}
              />
            </Card>
          </Grid>
        ) : (
          <>{defaultMessages.permission}</>
        )}
      </Grid>
    </Grid>
    <ModalExport openModalExport={openModalExport} setOpenModalExport={setOpenModalExport}/>
    </>
  )
}

// **

// ** CASL

// ** Controle de acesso da página
// ** Usuário deve possuir a habilidade para ter acesso a esta página
NfseList.acl = {
  action: 'list',
  subject: 'ac-nfse-page'
}

// **

// ** EXPORT
export default NfseList
