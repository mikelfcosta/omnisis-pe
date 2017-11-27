import * as React from 'react';
import Card from '../core/Content/Card';

export default class TechnologyArduino extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card size={65}>
          <p>TechnologyArduino Component Works!</p>
        </Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
