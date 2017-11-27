import * as React from 'react';
import Card from '../core/Content/Card';

export default class InterfaceNavigation extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card size={65}>
          <p>InterfaceNavigation Component Works!</p>
        </Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
