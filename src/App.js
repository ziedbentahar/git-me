import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import Autocomplete from './components/Autocomplete';
import {SidebarContent} from './components/Sidebar';
import {RoundButtonWithArrow} from './components/Buttons';
import SearchService from 'services/SearchService';
import {DOCUMENTS_FILE_NAME, INDEX_FILE_NAME} from './resourceNames';

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

    const [documents,
      index] = await Promise.all([
      (await fetch(DOCUMENTS_FILE_NAME)).json(),
      (await fetch(INDEX_FILE_NAME)).json()
    ]);

    SearchService.initialize(documents, index);
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

    this
      .autocomplete
      .focus();
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
          <Autocomplete
            ref
            ={(autocomplete) => this.autocomplete = autocomplete}
            searchByPrefixFn={SearchService.searchByPrefix}/>
          <div className="menu">
            <RoundButtonWithArrow
              style={{
              position: 'fixed',
              right: 10,
              top: 20
            }}
              withBorder={false}
              arrowDirection="left"
              onClick={() => this.onSetSidebarOpen(true)}/>
          </div>

        </div>
      </Sidebar>

    );
  }

}

export default App;
