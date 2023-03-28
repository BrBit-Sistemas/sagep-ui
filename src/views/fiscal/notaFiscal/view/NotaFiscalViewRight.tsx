// ** React Imports
import { useContext } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

import { defaultMessages } from 'src/@core/utils/enum/messages'
import { defaultAnswer, exigibilidadeISS, codigoCancelamento, status, responsavelRetencao, defaultYesNo } from 'src/@core/utils/enum/fiscal'
import { NotaFiscalType } from 'src/types/fiscal/notaFiscal/notaFiscalTypes'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CustomChip from 'src/@core/components/mui/chip'
import { formatDocument, formatMoney, formatPhone } from 'src/@core/utils/format'

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
  };
  if(notaFiscalId === '2') {
    notaFiscalData.notaFiscalStatusId = 3
    notaFiscalData.notaFiscalStatus.name = 'Cancelada'
    notaFiscalData.notaFiscalStatus.color = 'error'
    notaFiscalData.codigoCancelamento = '2'
  }
  if(notaFiscalId === '3') {
    notaFiscalData.notaFiscalStatusId = 1
    notaFiscalData.notaFiscalStatus.name = 'Não enviada'
    notaFiscalData.notaFiscalStatus.color = 'warning'
    delete notaFiscalData.numeroNotaFiscal;
  }

  /*if (notaFiscalId) {
    return (    
      <Grid container spacing={6}>
        {ability?.can('read', 'ac-cliente-page') ? (
          <Grid item xs={12} md={5} lg={4}>
            <NotaFiscalViewLeft id={clienteId} />
          </Grid>
        ) : <>{t("You do not have permission to view this resource.")}</>}

        {ability?.can('read', 'ac-cliente-page') ? (
          <Grid item xs={12} md={7} lg={8}>
            <NotaFiscalViewRight id={clienteId} />
          </Grid>
        ) : <>{t("You do not have permission to view this resource.")}</>}
      </Grid>
    )
  } else {
    return null
  }*/

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
              {notaFiscalData.notaFiscalStatusId === status.cancelled && !!notaFiscalData.codigoCancelamento && (
              <Typography variant="body2" color="text.secondary">
                Código de cancelamento: {codigoCancelamento[notaFiscalData.codigoCancelamento]}
              </Typography>
              )}
            <br/>
            <Typography variant="body2" color="text.secondary">
              <b>Dados do Fornecedor</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nome / Razão social: {notaFiscalData.fornecedor.razaoSocial}<br/>
              CPF / CNPJ: {formatDocument(notaFiscalData.fornecedor.cpf || notaFiscalData.fornecedor.cnpj)}<br/>
              Inscrição municipal: {notaFiscalData.fornecedor.inscricaoMunicipal}<br/>
              Endereço: {notaFiscalData.fornecedor.endereco+' n '+notaFiscalData.fornecedor.numero}
              {!!notaFiscalData.fornecedor.complemento && ' - '+notaFiscalData.fornecedor.complemento}. 
              Bairro {notaFiscalData.fornecedor.bairro}, município {notaFiscalData.fornecedor.codigoMunicipio} / {notaFiscalData.fornecedor.uf}. 
              CEP {notaFiscalData.fornecedor.cep}<br/>
              Telefone: {formatPhone(notaFiscalData.fornecedor.telefone)}<br/>
              E-mail: {notaFiscalData.fornecedor.email}
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
              Valor total Serviços: {notaFiscalData.valorServicos}
              {notaFiscalData.servico.map(servico => (
                <div key={servico.id}>
                  <br/>
                  Serviço: {servico.itemListaServico}<br/>
                  Discriminação: {servico.discriminacao}<br/>
                  Valor serviço: R$ {formatMoney(servico.valorServicos.toString())}<br/>
                  Valor deduções: R$ {formatMoney(servico.valorDeducoes?.toString())}<br/>
                  Valor PIS: R$ {formatMoney(servico.valorPis?.toString())}<br/>
                  Valor COFINS: R$ {formatMoney(servico.valorCofins?.toString())}<br/>
                  Valor INSS: R$ {formatMoney(servico.valorInss?.toString())}<br/>
                  Valor IR: R$ {formatMoney(servico.valorIr?.toString())}<br/>
                  Valor CSLL: R$ {formatMoney(servico.valorCsll?.toString())}<br/>
                  Outras retenções: R$ {formatMoney(servico.outrasRetencoes?.toString())}<br/>
                  Valor total dos tributos: R$ {formatMoney(servico.valorTotalTributos?.toString())}<br/>
                  Valor ISS: R$ {formatMoney(servico.valorIss?.toString())}<br/>
                  Alíquota: {servico.aliquota || '0'}%<br/>
                  Desconto incondicionado: R$ {formatMoney(servico.descontoIncondicionado?.toString())}<br/>
                  Desconto condicionado: R$ {formatMoney(servico.descontoCondicionado?.toString())}<br/>
                  ISS retido? {defaultAnswer[servico.isIssRetido]}{servico.isIssRetido === defaultYesNo.yes && !!servico.responsavelRetencao && ' Responsável retenção: '+responsavelRetencao[servico.responsavelRetencao]}<br/>
                  Código CNAE: {servico.codigoCnae}<br/>
                  Código tributação do município: {servico.codigoTributacaoMunicipio}<br/>
                  Código NBS: {servico.codigoNbs}<br/>
                  Código do município: {servico.codigoMunicipio}<br/>
                  Município de incidência: {servico.municipioIncidencia}<br/>
                  Exigibilidade ISS: {exigibilidadeISS[servico.exigibilidadeISS]}<br/>
                  Identificação de não exigibilidade: {servico.identificacaoNaoExigibilidade}<br/>
                  Número processo: {servico.numeroProcesso}<br/>
                </div>
              ))}
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