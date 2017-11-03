import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import {SidebarContent} from './components/Sidebar';
import GitCheatSheet from './screens/GitCheatSheet';
import Home from './screens/Home';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    }
  }

  async componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  }

  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open});
  }

  handleKeyDown = () => {

    if (this.state.sidebarOpen) {
      this.onSetSidebarOpen(false);
    }

  }

  render() {

    const sidebarContent = <SidebarContent/>

    return (
      <Sidebar
        pullRight
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}>
        <div className="app">
          <Home />
        </div>
      </Sidebar>

    );
  }

}

export default App;
