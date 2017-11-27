import * as React from 'react';
import { content } from './Content.scss';
import Card from './Card';

export default class Content extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={content}>
        <Card size={65}></Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
