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

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Actions Imports
import { fetchData } from 'src/store/fiscal/notaFiscal/index'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

// ** Custom Components Imports
import TableHeader from 'src/views/fiscal/notaFiscal/list/TableHeader'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'

// **

// ** INTERFACES

interface CellType {
  row: NotaFiscalType
}

// **

const defaultColumns = [
  {
    flex: 0.2,
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
    flex: 0.2,
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
              📬{row.fornecedor.cnpj}{row.fornecedor.cpf}
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
          //color={row.notaFiscalStatus.color}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    },
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'chamada',
    headerName: 'Cód. / Mês Chamada',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.codigoChamada} / {row.mesChamada}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'convenio',
    headerName: 'Empresa / Convênio',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.codigoEmpresa} / {row.codigoConvenio}
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
          {row.valorServico}
        </Typography>
      )
    }
  },
]

// **

// ** COMPONENT FUNCIONAL
const NfseList = () => {
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

  const columns = [
    ...defaultColumns,
    {
      flex: 0.1,
      minWidth: 90,
      sortable: false,
      field: 'actions',
      headerName: 'Ações',
      headerAlign: 'center' as const,
      align: 'center' as const,
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {ability?.can('read', 'ac-nfse-page') && (
            <Link href={`/fiscal/notaFiscal/view/${row.id}`} passHref>
              <Tooltip title="Ver">
                <IconButton>
                  <EyeOutline fontSize='small' sx={{ mr: 2 }} />
                </IconButton>
              </Tooltip>
            </Link>
          )}
        </Box>
      )
    }
  ]

  return (
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
              <TableHeader value={value} handleFilter={handleFilter} />
              <DataGrid
                localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                autoHeight
                rows={store.data}
                columns={columns}
                checkboxSelection
                pageSize={pageSize}
                disableSelectionOnClick
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
