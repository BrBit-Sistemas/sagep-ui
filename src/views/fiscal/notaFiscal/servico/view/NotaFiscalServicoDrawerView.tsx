// ** React Imports
import { useContext, useState, useEffect } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import Divider from '@mui/material/Divider'
''
// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Copmponents Imports
import { useTranslation } from 'react-i18next'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { DataGrid, ptBR } from '@mui/x-data-grid'
import { AbilityContext } from 'src/layouts/components/acl/Can'
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material'
import { EyeOutline } from 'mdi-material-ui'

// ** Icons Imports
import { ServicoType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

// ** Actions Imports
// import { fetchData } from 'src/store/negocios/comercial/cliente/contrato/fatura/index'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

interface NotaFiscalServicoDrawerViewType {
  row: ServicoType | undefined
  open: boolean
  toggle: () => void
}

interface CellType {
  row: ServicoType
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const formatCurrency = (currency: number) => {
  return currency.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const NotaFiscalServicoDrawerView = (props: NotaFiscalServicoDrawerViewType) => {
  // ** States
  const [pageSize, setPageSize] = useState<number>(10)
  const [row, setRow] = useState<ServicoType | undefined>()

  // ** Hook
  const dispatch = useDispatch<AppDispatch>()
//   const store = useSelector((state: RootState) => state.clienteContratoFatura)
  const ability = useContext(AbilityContext)

  const {
    reset,
    control
  } = useForm()

//   useEffect(() => {
//     dispatch(
//       fetchData({
//         notaFiscalServicoId: props?.row?.id,
//         quitadas: true
//       })
//     )
//   }, [dispatch, props?.row?.id])

  // ** Props
  const { open, toggle } = props

  const handleClose = () => {
    toggle()
    reset()
  }

  const { t } = useTranslation()

  return (
    <Drawer
      open={open}
      z-index={3000}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>Visualizar serviço nota fiscal</Typography>
        <Close fontSize='small' onClick={handleClose} sx={{ cursor: 'pointer' }} />
      </Header>
      <Box sx={{ p: 5 }}>
        <form>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1, mb: 5, width: '100%' }}>
                <Button size='large' variant='outlined' color='error' onClick={handleClose} sx={{ width: '100%' }}>
                    {t("Cancel")}
                </Button>
            </Box>
            <Divider sx={{ mb: 5 }}/>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label='ID'
                value={props?.row?.id}
                defaultValue="."
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor descrição"
                value={props?.row?.descricao || ""}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor serviços"
                value={formatCurrency(props?.row?.valorServicos || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor deduções"
                value={formatCurrency(props?.row?.valorDeducoes || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor PIS"
                value={formatCurrency(props?.row?.valorPis || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor COFIN"
                value={formatCurrency(props?.row?.valorCofins || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor INSS"
                value={formatCurrency(props?.row?.valorInss || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor IR"
                value={formatCurrency(props?.row?.valorIr || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor CSLL"
                value={formatCurrency(props?.row?.valorCsll || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Outras retenções"
                value={formatCurrency(props?.row?.outrasRetencoes || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor total tributos"
                value={formatCurrency(props?.row?.valorTotalTributos || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor ISS"
                value={formatCurrency(props?.row?.valorIss || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor alíquota"
                value={formatCurrency(props?.row?.aliquota || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor desconto incondicionado"
                value={formatCurrency(props?.row?.descontoIncondicionado || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Valor desconto condicionado"
                value={formatCurrency(props?.row?.descontoCondicionado || 0)}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="IS ISS Retido"
                value={props?.row?.isIssRetido || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Responsável retenção"
                value={props?.row?.responsavelRetencao || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Item lista serviço"
                value={props?.row?.itemListaServico || ""}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="CNAE"
                value={props?.row?.codigoCnae || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Código tributação município"
                value={props?.row?.codigoTributacaoMunicipio || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Código NBS"
                value={props?.row?.codigoNbs || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Código município"
                value={props?.row?.codigoMunicipio || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Exigibilidade"
                value={props?.row?.exigibilidadeISS || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Identificação não exigibilidade"
                value={props?.row?.identificacaoNaoExigibilidade || ""}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Município incidentado"
                value={props?.row?.municipioIncidencia || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Número processo"
                value={props?.row?.numeroProcesso || 0}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mb: 6 }}>
                <TextField
                disabled={true}
                label="Nota fiscal ID"
                value={props?.row?.notaFiscalId || 0}
                />
            </FormControl>
            <Divider sx={{ mb: 5, mt: 0 }}/>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4, width: '100%' }}>
                <Button size='large' variant='outlined' color='error' onClick={handleClose} sx={{ width: '100%' }}>
                    {t("Cancel")}
                </Button>
            </Box>
        </form>
      </Box>
    </Drawer>
  )
}

// ** Controle de acesso da página
// ** Usuário deve possuir a habilidade para ter acesso a esta página
NotaFiscalServicoDrawerView.acl = {
  action: 'read',
  subject: 'ac-notaFiscalServico-page'
}

export default NotaFiscalServicoDrawerView