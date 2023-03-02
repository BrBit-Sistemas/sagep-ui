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

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Actions Imports
import { fetchData } from 'src/store/fiscal/nfse/index'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { NfseType } from 'src/types/fiscal/nfse/nfseTypes'

// ** Custom Components Imports
import TableHeader from 'src/views/fiscal/nfse/list/TableHeader'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'

// **

// ** INTERFACES

interface CellType {
  row: NfseType
}

// **

const defaultColumns = [
  {
    flex: 0.2,
    minWidth: 30,
    field: 'nome',
    headerName: 'Nome',
    headerAlign: 'left' as const,
    align: 'left' as const,
    renderCell: ({ row }: CellType) => {
      const { IdentificacaoNfse_Numero } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              component='a'
              variant='body2'
              sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none' }}
            >
              {IdentificacaoNfse_Numero}
            </Typography>
          </Box>
        </Box>
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
  const store = useSelector((state: RootState) => state.nfse)

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
            <Link href={`/fiscal/nfse/view/${row.id_nfse}`} passHref>
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
            title={<Typography variant='h5'>Nfses</Typography>}
            subtitle={<Typography variant='body2'>Lista nfses.</Typography>}
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
