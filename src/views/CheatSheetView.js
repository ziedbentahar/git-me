import React, {Component} from 'react';
import CheatSheet from 'components/CheatSheet';
import SearchServiceFactory from 'services/Search/SearchServiceFactory';
import cheatSheetConfig from 'config/cheatSheetConfig';

const searchService = SearchServiceFactory
    .createNew({
        documentsFileName: cheatSheetConfig.data.documents, 
        indexFileName: cheatSheetConfig.data.index});

export default class CheatSheetView extends Component {

    async componentDidMount() {
        await searchService.loadDocumentsAndData();
    }

    render() {

        const {inputLabel, inputDescription} = cheatSheetConfig.search;
        
        return <CheatSheet
            {...this.props}
            inputLabel={inputLabel}
            inputDescription={inputDescription}
            searchByPrefixFn={searchService.searchByPrefix}
            name={cheatSheetConfig.name}/>;
    }
}

