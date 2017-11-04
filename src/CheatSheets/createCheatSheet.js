import React from 'react';
import PropTypes from 'prop-types';
import CheatSheetContainer from './CheatSheetContainer';
import SearchServiceFactory from 'services/Search/SearchServiceFactory';

const createCheatSheet = (cheatSheetConfiguration, 
    backClickHandler, 
    sideBarClickHandler) => {

    const searchService = SearchServiceFactory
        .createNew({
            documentsFileName: cheatSheetConfiguration.data.documents, 
            indexFileName: cheatSheetConfiguration.data.index});

    return class extends React.Component {

        async componentDidMount () {
           await searchService.loadDocumentsAndData();
        }

        render() {
            return (<CheatSheetContainer {...this.props}
                searchByPrefixFn={searchService.searchByPrefix}
                name={cheatSheetConfiguration.name}/>);
        }
    }

};

createCheatSheet.propTypes = {
    cheatSheetConfiguration: PropTypes.object.isRequired
};

export default createCheatSheet;