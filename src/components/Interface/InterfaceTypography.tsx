import * as React from 'react';
import Card from '../core/Content/Card';

export default class InterfaceTypography extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card size={65}>
          <p>InterfaceTypography Component Works!</p>
        </Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
