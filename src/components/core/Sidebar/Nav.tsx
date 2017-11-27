import * as React from 'react';
import { nav, navItem, childrenActive, navItemChildren } from './Nav.scss';
import { NavLink } from 'react-router-dom';

interface INavState {
  navigation: INavigation[];
}

interface INavigation {
  name: string;
  children: { name: string, link: string }[];
}

const navigation: INavigation[] = [
  {
    name: 'Conceito de Criação',
    children: [
      { name: 'Objetivo', link: '/concept/objective' },
      { name: 'Público Alvo', link: '/concept/public' },
    ],
  },
  {
    name: 'Estratégias de Comunicação',
    children: [
      { name: 'Ações', link: '/communication/actions' },
      { name: 'Peças', link: '/communication/content' },
    ],
  },
  {
    name: 'Design de Informação',
    children: [
      { name: 'Organização', link: '/information/organization' },
      { name: 'Hierarquia e Classificação', link: '/information/hierarchy' },
    ],
  },
  {
    name: 'Design de Navegação',
    children: [
      { name: 'Website', link: '/navigation/website' },
      { name: 'Hierarquia e Classificação', link: '/navigation/hierarchy' },
    ],
  },
  {
    name: 'Design de Interface',
    children: [
      { name: 'Logo', link: '/interface/logo' },
      { name: 'Tipografia', link: '/interface/typography' },
      { name: 'Cores', link: '/interface/colors' },
      { name: 'Fluxo de Navegação', link: '/interface/navigation' },
    ],
  },
  {
    name: 'Tecnologias',
    children: [
      { name: 'Softwares/Ferramentas', link: '/technology/tools' },
      { name: 'Frameworks/Linguagem', link: '/technology/frameworks' },
      { name: 'Cartão Inteligente', link: '/technology/smartpass' },
      { name: 'Arduíno', link: '/technology/arduino' },
      { name: 'Documentação', link: '/technology/documentation' },
    ],
  },
];

export default class Nav extends React.Component<any, INavState> {

  constructor(props: any) {
    super(props);
  }

  componentWillMount() {
    this.setState({ navigation });
  }

  componentWillUnmount() {}

  renderNavigation() {
    return this.state.navigation.map((nav) => {
      return (
        <div key={nav.name}>
          {this.renderNavigationLink(nav)}
          {this.renderNavigationChildren(nav)}
        </div>
      );
    });
  }

  private renderNavigationLink(nav: INavigation) {
    return (
      <div className={navItem}>
        <span/><span/>
        <h2>{nav.name}</h2>
      </div>
    );
  }

  private renderNavigationChildren(nav: INavigation) {
    if (nav.children) {
      const children = nav.children.map((children) => {
        return (
          <NavLink to={children.link} key={children.name} activeClassName={childrenActive}>
            {children.name}
          </NavLink>
        );
      });
      return (
        <div className={navItemChildren}>
          { children }
        </div>
      );
    }
  }

  render() {
    return (
      <div className={nav}>
        {this.renderNavigation()}
      </div>
    );
  }
}
