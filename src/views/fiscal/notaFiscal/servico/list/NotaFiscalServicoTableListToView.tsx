// ** React Imports
import { useContext, useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** Third Party Import
import { useTranslation } from 'react-i18next'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip';

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'
import PageHeader from 'src/@core/components/page-header'
 
// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
// import { fetchData } from 'src/store/negocios/comercial/cliente/contrato/index'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

// ** Custom Components Imports
// import ClienteContratoViewDrawer from 'src/views/negocios/comercial/cliente/contrato/view/ClienteContratoViewDrawer'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

interface Props {
  notaFiscalId: string
}
interface CellType {
  row: NotaFiscalType
}

// ** Styled component for the link for the avatar without image
const AvatarWithoutImageLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  marginRight: theme.spacing(3)
}))

// ** renders group column
const renderServicoNome = (row: NotaFiscalType) => {
  return (
    <AvatarWithoutImageLink href="#">
      <CustomAvatar
          skin='light'
          color={'primary'}
          sx={{ mr: 3, width: 30, height: 30, fontSize: '.875rem' }}
        >
          {getInitials(row.fornecedor.razaoSocial ? row.fornecedor.razaoSocial : 'SN')}
      </CustomAvatar>
    </AvatarWithoutImageLink>
  )
}

const defaultColumns = [
  {
    flex: 0.08,
    minWidth: 30,
    field: 'descriminacao',
    headerName: 'Descriminação',
    headerAlign: 'left' as const,
    align: 'left' as const,
    renderCell: ({ row }: CellType) => {
      const { descriminacao } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderServicoNome(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              component='a'
              variant='body2'
              sx={{ fontWeight: 600, color: 'text.primary', textDecoration: 'none' }}
            >
              {descriminacao}
            </Typography>
            <Typography noWrap component='a' variant='caption' sx={{ textDecoration: 'none' }}>
              📝{descriminacao}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    field: 'codicoMunicipio',
    headerName: 'Código Município',
    headerAlign: 'center' as const,
    align: 'center' as const,
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap variant='body2'>
          {row.notaFiscalServicos.map}
        </Typography>
      )
    }
  }
]

const NotaFiscalServicoTableListToView = ({ notaFiscalId }: Props) => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  const { t } = useTranslation()
   
  // ** State
  const [value, setValue] = useState<string | string[] | undefined>('')
  const [pageSize, setPageSize] = useState<number>(10)
  const [clienteContratoViewOpen, setClienteContratoViewOpen] = useState<boolean>(false)
  const [row, setRow] = useState<NotaFiscalType | undefined>()

  const dispatch = useDispatch<AppDispatch>()
  // const store = useSelector((state: RootState) => state.clienteContrato)

  useEffect(() => {
    setValue(notaFiscalId)
  }, [notaFiscalId])

  // useEffect(() => {
  //   dispatch(
  //     fetchData({
  //       clienteId: value
  //     })
  //   )
  // }, [dispatch, value])

  const handleClienteContratoView = (row : NotaFiscalType) => {
    // filter faturas - apenas as quitadas conforme solicitação do cliente
    setRow(row)
    setClienteContratoViewOpen(true)
  }

  // const toggleClienteContratoViewDrawer = () => setClienteContratoViewOpen(!clienteContratoViewOpen)

  const store = [
      {
        id: '1',
        valorServicos: 1200.00,
        valorDeducoes: 100,
        valorPis: 15,
        valorCofins: 200,
        valorInss: 24.50,
        valorIr: 16.50,
        valorCsll: 20,
        outrasRetencoes: 20,
        valorTotalTributos: 350.60,
        valorIss: 12,
        aliquota: 2,
        descontoIncondicionado: 20,
        descontoCondicionado: 23,
        isIssRetido: 2,
        responsavelRetencao: 1,
        itemListaServico: 'Serviço tal',
        codigoCnae: 2221,
        codigoTributacaoMunicipio: '2',
        codigoNbs: '33332',
        discriminacao: 'Descrição do serviço',
        codigoMunicipio: 85,
        exigibilidadeISS: 1,
        identificacaoNaoExigibilidade: 'Motivo tal',
        municipioIncidencia: 85,
        numeroProcesso: '0023233',
        notaFiscalId: '1'
      },
      {
        id: '2',
        valorServicos: 1200.00,
        valorDeducoes: 100,
        valorPis: 15,
        valorCofins: 200,
        valorInss: 24.50,
        valorIr: 16.50,
        valorCsll: 20,
        outrasRetencoes: 20,
        valorTotalTributos: 350.60,
        valorIss: 12,
        aliquota: 2,
        descontoIncondicionado: 20,
        descontoCondicionado: 23,
        isIssRetido: 2,
        responsavelRetencao: 1,
        itemListaServico: 'Serviço tal',
        codigoCnae: 2221,
        codigoTributacaoMunicipio: '2',
        codigoNbs: '33332',
        discriminacao: 'Descrição do serviço',
        codigoMunicipio: 85,
        exigibilidadeISS: 1,
        identificacaoNaoExigibilidade: 'Motivo tal',
        municipioIncidencia: 85,
        numeroProcesso: '0023233',
        notaFiscalId: '2'
      }
    ]

  const columns = [
    ...defaultColumns,
    {
      flex: 0.05,
      minWidth: 90,
      sortable: false,
      field: 'actions', 
      headerName: 'Ações',
      headerAlign: 'center' as const,
      align: 'center' as const,
      renderCell: ({ row }: CellType) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {ability?.can('read', 'ac-notaFiscalServico-page') &&
            <Tooltip title={t("View")}>
              <IconButton onClick={() => handleClienteContratoView(row)}>
                <EyeOutline fontSize='small' sx={{ mr: 2 }} />
              </IconButton>
            </Tooltip>
          }
        </Box>
      )
    }
  ]

  return (
    <Grid container spacing={1}>
      <Grid container spacing={6}>
        <Grid item xs={12} sx={{ mt: "10px"}}>
          <PageHeader
            title={<Typography variant='h5'></Typography>}
            subtitle={
              <Typography variant='body2'>
                Lista de serviços
              </Typography>
            }
          />
        </Grid> 
        {ability?.can('list', 'ac-clienteContrato-page') ? (
          <Grid item xs={12}>
            <Card>
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
        ) : <>{t("You do not have permission to view this resource.")}</>}
        {/* <ClienteContratoViewDrawer open={clienteContratoViewOpen} toggle={toggleClienteContratoViewDrawer} row={row}/> */}
      </Grid>
    </Grid>
  )
}

// ** Controle de acesso da página
// ** Usuário deve possuir a habilidade para ter acesso a esta página
NotaFiscalServicoTableListToView.acl = {
  action: 'list',
  subject: 'ac-clienteContrato-page'
}

export default NotaFiscalServicoTableListToView