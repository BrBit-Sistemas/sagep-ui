// ** React Imports
import { useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'

// ** Next Import
import Link from 'next/link'

// ** Third Party Imports
import { useForm } from 'react-hook-form'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// Import Translate
import { useTranslation } from 'react-i18next'

// ** Actions Imports
// import { fetchData } from 'src/store/negocios/comercial/cliente/view'

// ** Store Imports
import { AppDispatch, RootState } from 'src/store'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  notaFiscalId: string
}

const NotaFiscalViewLeft = ({notaFiscalId}: Props) => {
  // ** Hooks
  const { t } = useTranslation()

  // ** States
  const dispatch = useDispatch<AppDispatch>()
  // const store = useSelector((state: RootState) => state.clienteView)

  const {
    setValue
  } = useForm({
    mode: 'onChange'
  })

  // useEffect(() => {
  //   dispatch(
  //     fetchData({
  //       id: id
  //     })
  //   )
  // }, [dispatch, id])

  // useEffect(() => {
  //   if(store)
  //   {
  //     setValue('id', store?.id)
  //     setValue('nomeFantasia', store?.nomeFantasia)
  //     setValue('razaoSocial', store?.razaoSocial)
  //     setValue('inscricaoEstadual', store?.inscricaoEstadual)
  //     setValue('cnpj', store?.cnpj)
  //     setValue('telefonePrincipal', store?.telefonePrincipal)
  //     setValue('emailPrincipal', store?.emailPrincipal)
  //     setValue('dataFundacao', store?.dataFundacao)
  //     setValue('cep', store?.cep)
  //     setValue('rua', store?.rua)
  //     setValue('numero', store?.numero)
  //     setValue('complemento', store?.complemento)
  //     setValue('estado', store?.estado)
  //     setValue('cidade', store?.cidade)
  //     setValue('codigoMunicipio', store?.codigoMunicipio)
  //     setValue('observacao', store?.observacao)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [store])

  const store : NotaFiscalType = {
    id: '1',
    numeroNotaFiscal: 123,
    tenantId: '2',
    fornecedorId: '2',
    fornecedor: {
      razaoSocial: 'Nome Fornecedor',
      cpf: '10180330926',
      inscricaoMunicipal: '222222',
      endereco: 'Rua José Munch',
      numero: '185',
      complemento: 'apt 701',
      bairro: 'São Luiz',
      codigoMunicipio: 85,
      uf: 'SC',
      cep: '88888888',
      telefone: '47992645470',
      email: 'maira.torresani@gmail.com'
    },
    notaFiscalStatusId: 2,
    notaFiscalStatus: {
      name: 'Enviada',
      color: 'success',
    },
    codigoChamada: '02',
    mesChamada: '03',
    codigoEmpresa: 1,
    codigoConvenio: 1,
    competencia: '16/03/2023',
    informacoesComplementares: 'Outra informação',
    valorServicos: 'R$ 1.200,00',
    servico: [{
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
    }]
  }

  const renderClienteAvatar = () => {
    if (store) {
      return (
        <CustomAvatar
          skin='light'
          variant='rounded'
          color={'primary' as ThemeColor}
          sx={{ width: 120, height: 120, fontWeight: 600, mb: 4, fontSize: '3rem' }}
        >
          {getInitials(store?.fornecedor.razaoSocial || "CP")}
        </CustomAvatar>
      )
    } else {
      return null
    }
  }

  if (store) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ pt: 15, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              {renderClienteAvatar()}
              <Typography variant='h6' sx={{ mb: 2 }}>
                {store?.fornecedor.razaoSocial}
              </Typography>
              <CustomChip
                skin='light'
                size='small'
                label={store?.fornecedor.razaoSocial || store?.fornecedor.razaoSocial}
                color='primary'
                sx={{
                  height: 20,
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: '5px',
                  textTransform: 'capitalize',
                  '& .MuiChip-label': { mt: -0.25 }
                }}
              />
            </CardContent>
            <CardContent>
              <Typography variant='h6'>{t("Details")}</Typography>
              <Divider />
              <Box sx={{ pt: 2, pb: 2 }}>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Número:</Typography>
                  <Typography variant='body2'>{store?.numeroNotaFiscal}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Código camada:</Typography>
                  <Typography variant='body2'>{store?.codigoChamada}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Mês camada:</Typography>
                  <Typography variant='body2'>{store?.mesChamada}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Código empresa:</Typography>
                  <Typography variant='body2'>{store?.codigoEmpresa}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Código convênio:</Typography>
                  <Typography variant='body2'>{store?.codigoConvenio}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Competência:</Typography>
                  <Typography variant='body2'>{store?.informacoesComplementares}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Valor serviços:</Typography>
                  <Typography variant='body2'>{store?.valorServicos}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>{t("Note")}:</Typography>
                  <Typography variant='body2'>{store?.informacoesComplementares}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Status:</Typography>
                  <CustomChip
                    skin='light'
                    size='small'
                    label={`${t(store?.notaFiscalStatus.name)}`}
                    color={store?.notaFiscalStatus.color}
                    sx={{
                      height: 20,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      borderRadius: '5px',
                      textTransform: 'capitalize'
                    }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Alert severity='error'>
            "Nota fiscal com id:" {notaFiscalId} Não existe. Por favor verifique a listagem de notas fiscais : {' '}
            <Link href='/fiscal/notaFiscal/list'>Lista notas fiscais</Link>
          </Alert>
        </Grid>
      </Grid>
    )
  }
}

NotaFiscalViewLeft.acl = {
  action: 'read',
  subject: 'ac-cliente-page'
}

export default NotaFiscalViewLeft