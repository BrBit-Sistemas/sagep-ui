// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'
import { Box } from 'mdi-material-ui'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CustomChip from 'src/@core/components/mui/chip'

interface Props {
  notaFiscalId: string
}

const NotaFiscalViewPage = ({ notaFiscalId }: Props) => {
  // ** Hooks
  const ability = useContext(AbilityContext)
  
  const notaFiscalData : NotaFiscalType = {
    id: '1',
    numeroNotaFiscal: 123,
    tenantId: '2',
    fornecedorId: '2',
    fornecedor: {
      razaoSocial: 'Nome Fornecedor',
      cnpj: '123456789012',
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
    notaFiscalStatusId: '1',
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
  };
  if(notaFiscalId === '2') {
    notaFiscalData.notaFiscalStatusId = '2'
    notaFiscalData.notaFiscalStatus.name = 'Cancelada'
    notaFiscalData.notaFiscalStatus.color = 'error'
    notaFiscalData.codigoCancelamento = '2'
  }
  if(notaFiscalId === '3') {
    notaFiscalData.notaFiscalStatusId = '1'
    notaFiscalData.notaFiscalStatus.name = 'Não enviada'
    notaFiscalData.notaFiscalStatus.color = 'warning'
    delete notaFiscalData.numeroNotaFiscal;
  }

  if (notaFiscalId) {
    return (    
      <>
        {ability?.can('read', 'ac-nfse-page') ? (
          <Card className='px-3'>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              N da nota: {notaFiscalData.numeroNotaFiscal || 's/n'}
              <CustomChip
                skin='light'
                size='small'
                label={notaFiscalData.notaFiscalStatus.name}
                color={notaFiscalData.notaFiscalStatus.color}
                sx={{ textTransform: 'capitalize', marginLeft: '10px' }}
              />
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              <b>Dados do Fornecedor</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nome / Razão social: {notaFiscalData.fornecedor.razaoSocial}<br/>
              CPF / CNPJ: {notaFiscalData.fornecedor.cpf}{notaFiscalData.fornecedor.cnpj}<br/>
              Inscrição municipal: {notaFiscalData.fornecedor.inscricaoMunicipal}<br/>
              Endereço: {notaFiscalData.fornecedor.endereco+' n '+notaFiscalData.fornecedor.numero}
              {!!notaFiscalData.fornecedor.complemento && ' - '+notaFiscalData.fornecedor.complemento}. 
              Bairro {notaFiscalData.fornecedor.bairro}, município {notaFiscalData.fornecedor.codigoMunicipio} / {notaFiscalData.fornecedor.uf}. 
              CEP {notaFiscalData.fornecedor.cep}<br/>
              Telefone {notaFiscalData.fornecedor.telefone}<br/>
              E-mail {notaFiscalData.fornecedor.email}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              <b>Dados da Nota Fiscal</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Chamada: cód. {notaFiscalData.codigoChamada} / mês {notaFiscalData.mesChamada}<br/>
              Convênio: empresa {notaFiscalData.codigoEmpresa} / convênio {notaFiscalData.codigoConvenio}<br/>
              Competência: {notaFiscalData.competencia}<br/>
              Informações complementares: {notaFiscalData.informacoesComplementares}
            </Typography>
            <br/>
            <Typography variant="body2" color="text.secondary">
              <b>Dados do Serviço</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Valor Serviços: {notaFiscalData.valorServicos}
            </Typography>
          </CardContent>
          </Card>
        ) : <>{defaultMessages.permission}</>}
      </>
    )
  } else {
    return null
  }
}

NotaFiscalViewPage.acl = {
  action: 'read',
  subject: 'ac-nfse-page'
}

export default NotaFiscalViewPage