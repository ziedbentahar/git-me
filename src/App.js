import React, { Component } from 'react';
import Autocomplete from './components/autocomplete/Autocomplete';
import SearchService from './services/SearchService'
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.searchService = new SearchService();
  }

  async componentDidMount() {
    const documentsResponse = await fetch('git-cheat-sheet.json');
    const documents = await documentsResponse.json();
    this.searchService.createIndex(documents);
  }

  render() {
    return (
      <div className="App">
        <Autocomplete searchByPrefixFn={this.searchService.searchByPrefix} />
      </div>
    );
  }
}

export default App;
