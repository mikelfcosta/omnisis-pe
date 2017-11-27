import * as React from 'react';
import Card from '../core/Content/Card';
import { cardHeader } from '../core/Content/Card.scss';

export default class ConceptPublic extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card size={65}>
          <h1 className={cardHeader}>Público Alvo</h1>
          <p>
            A Omnisis Educação é definida como uma empresa B2B. Nossa estratégia de marketing é direcionada a empresas,
            melhor dizendo, instituições de ensino superior. Para tanto, nosso público primário é caracterizado pelos
            administradores da instituição, sendo eles reitores, gerentes e coordenadores. Através do nosso sistema ERP,
            visamos tornar mais fácil, seguro e intuitivo o gerenciamento de dados no sistema.
          </p>
          <p>
            Nosso público secundário (ou indireto) são os próprios estudantes da instituição de ensino, uma vez que
            serão eles que utilizarão nosso smart card conectado ao sistema.
          </p>
          <p>
            Com essa linha estratégica, temos dois públicos a fim de conectarmos e impactarmos mutuamente suas
            respectivas metas, melhor esclarecidas nas Personas definidas abaixo:
          </p>
        </Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
