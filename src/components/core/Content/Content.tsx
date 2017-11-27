import * as React from 'react';
import { content } from './Content.scss';
import Card from './Card';

export default class Content extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={content}>
        <Card size={50}></Card>
      </div>
    );
  }
}
