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
    name: 'Dashboard',
    children: [
      { name: 'Administrar', link: '/holders/manage' },
      { name: 'Grupos', link: '/holders/groups' },
      { name: 'Perfis', link: '/holders/profiles' },
    ],
  },
  {
    name: 'Alunos',
    children: [
      { name: 'Administrar', link: '/holders/manage' },
      { name: 'Grupos', link: '/holders/groups' },
      { name: 'Perfis', link: '/holders/profiles' },
    ],
  },
  {
    name: 'Smart Pass',
    children: [
      { name: 'Maquinas', link: '/iot/machines' },
      { name: 'Cartões', link: '/iot/cards' },
      { name: 'Locais', link: '/iot/locations' },
    ],
  },
  {
    name: 'Insights',
    children: [
      { name: 'Comportamento', link: '/insights/behavior' },
      { name: 'Campus', link: '/insights/campus' },
      { name: 'Cartões', link: '/insights/cards' },
    ],
  },
  {
    name: 'Admin',
    children: [
      { name: 'Usuários', link: '/admin/users' },
      { name: 'Perfis', link: '/admin/roles' },
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
