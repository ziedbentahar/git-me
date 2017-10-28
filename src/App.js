import React, {Component} from 'react';
import Autocomplete from './components/autocomplete/Autocomplete';
import Notification from './components/notification/Notification';
import NotificationManager from './components/notification/NotificationManager';
import SearchService from './services/SearchService';
import { DOCUMENTS_FILE_NAME, INDEX_FILE_NAME} from './resourceNames';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';

class App extends Component {

  async componentDidMount() {

    const [documents, index] = await Promise.all([
      (await fetch(DOCUMENTS_FILE_NAME)).json(),
      (await fetch(INDEX_FILE_NAME)).json()
    ]);

    SearchService.initialize(documents, index);
  }

  render() {
    return (
      <div className="app">
        <Autocomplete className="autcomplete-box" searchByPrefixFn={SearchService.searchByPrefix}/>
        {/*<Notification notificationManager={NotificationManager}/>
        <button
    onClick={(e) => NotificationManager.notify({text: 'hello world', title: 'my title', duration: 2000, delayed: true})}>click me</button>*/}
      </div>

    );
  }
}

export default App;
