import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import {SidebarContent} from 'components/Sidebar';
import CheatSheetView from 'views/CheatSheetView';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';


class App extends Component {

  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    }
  }

  toggleSideBarState = (open) => {
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
        onSetOpen={this.toggleSideBarState}>
          <CheatSheetView sidebarClickHandler={this.toggleSideBarState} />
      </Sidebar>
    );
  }

}

export default App;
