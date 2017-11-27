import * as React from 'react';
import { content } from './Content.scss';
import { Route, Switch } from 'react-router';
import ConceptObjective from '../../Concept/ConceptObjective';
import ConceptPublic from '../../Concept/ConceptPublic';
import CommunicationActions from '../../Communication/CommunicationActions';
import CommunicationContent from '../../Communication/CommunicationContent';
import InformationOrganization from '../../Information/InformationOrganization';
import InformationHierarchy from '../../Information/InformationHierarchy';
import NavigationWebsite from '../../Navigation/NavigationWebsite';
import NavigationHierarachy from '../../Navigation/NavigationHierarachy';
import InterfaceLogo from '../../Interface/InterfaceLogo';
import InterfaceTypography from '../../Interface/InterfaceTypography';
import InterfaceColors from '../../Interface/InterfaceColors';
import InterfaceNavigation from '../../Interface/InterfaceNavigation';
import TechnologyTools from '../../Technology/TechnologyTools';
import TechnologyFrameworks from '../../Technology/TechnologyFrameworks';
import TechnologySmartpass from '../../Technology/TechnologySmartpass';
import TechnologyArduino from '../../Technology/TechnologyArduino';
import TechnologyDocumentation from '../../Technology/TechnologyDocumentation';

export default class Content extends React.Component<{}, {}> {

  componentWillMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={content}>
        <Switch>
          <Route path="/concept/objective" component={ConceptObjective}/>
          <Route path="/concept/public" component={ConceptPublic}/>
          <Route path="/communication/actions" component={CommunicationActions}/>
          <Route path="/communication/content" component={CommunicationContent}/>
          <Route path="/information/organization" component={InformationOrganization}/>
          <Route path="/information/hierarchy" component={InformationHierarchy}/>
          <Route path="/navigation/website" component={NavigationWebsite}/>
          <Route path="/navigation/hierarchy" component={NavigationHierarachy}/>
          <Route path="/interface/logo" component={InterfaceLogo}/>
          <Route path="/interface/typography" component={InterfaceTypography}/>
          <Route path="/interface/colors" component={InterfaceColors}/>
          <Route path="/interface/navigation" component={InterfaceNavigation}/>
          <Route path="/technology/tools" component={TechnologyTools}/>
          <Route path="/technology/frameworks" component={TechnologyFrameworks}/>
          <Route path="/technology/smartpass" component={TechnologySmartpass}/>
          <Route path="/technology/arduino" component={TechnologyArduino}/>
          <Route path="/technology/documentation" component={TechnologyDocumentation}/>
        </Switch>
      </div>
    );
  }
}
