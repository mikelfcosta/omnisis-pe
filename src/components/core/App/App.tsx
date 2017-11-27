import * as React from 'react';
import { app } from './App.scss';
import Sidebar from '../Sidebar/Sidebar';
import Content from '../Content/Content';

export default class App extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={app}>
        <Sidebar />
        <Content />
      </div>
    );
  }
}
