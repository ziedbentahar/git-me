import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import {BrowserRouter as Router} from 'react-router-dom';
import SlideInRoute from 'components/AnimatedRoute/SlideInRoute';
import {SidebarContent} from 'components/Sidebar';
import Home from 'views/Home';
import routes from 'config/routesConfig';

import 'font-awesome/css/font-awesome.min.css';
import 'ionicons/dist/css/ionicons.min.css'
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    }
  }

  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }

  render() {

    const sidebarContent = <SidebarContent/>

    return (
      <Sidebar
        ref={(sidebar) => this.sidebar = sidebar}
        pullRight
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}>
        <Router>
          <div>
            <SlideInRoute 
              exact 
              path="/" component={Home}/>
            <SlideInRoute
              exact
              path={routes.cheatSheets.git.path}
              component={routes.cheatSheets.git.component}
              sidebarClickHandler={this.onSetSidebarOpen}/>
          </div>
        </Router>
      </Sidebar>
    );
  }

}

export default App;
