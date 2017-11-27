import * as React from 'react';
import Card from '../core/Content/Card';

export default class NavigationHierarachy extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card size={65}>
          <p>NavigationHierarachy Component Works!</p>
        </Card>
        <Card size={35}></Card>
      </div>
    );
  }
}
