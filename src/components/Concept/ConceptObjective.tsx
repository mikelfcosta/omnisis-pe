import * as React from 'react';
import Card from '../core/Content/Card';
import { cardHeader } from '../core/Content/Card.scss';

export default class ConceptObjective extends React.Component<{}, {}> {

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <Card size={ 65 }>
          <h1 className={ cardHeader }>Objetivo</h1>
          <p>
            No mercado atual, além do investimento contínuo em novas plataformas tecnológicas, as empresas e
            instituições de ensino estão cada vez mais ponderando a sustentabilidade como base para o seu
            desenvolvimento. Logo, ter uma empresa ou instituição que contemple o pilar ambiental, econômico e social
            torna-se um verdadeiro e desafiador objetivo para todas suas áreas de crescimento. Em meio desta carência,
            ficamos com o objetivo de fomentar um ambiente onde contemple os dois caminhos: tecnológico e sustentável.
          </p>
          <p>
            Sendo simultaneamente uma solução tecnológica e sustentável, o Omnisis Educação conseguirá prover uma
            infraestrutura que melhorará a vida do universitário dentro da sua respectiva instituição de ensino. Isso
            será possível a partir do uso de um sistema de cartões inteligentes, facilitando seus acessos dentro da
            instituição e viabilizando uma sistemática estruturada de dados e monitoria para a mesma.
          </p>
        </Card>
        <Card size={ 35 }></Card>
      </div>
    );
  }
}
