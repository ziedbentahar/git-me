import React, {Component} from 'react';
import CheatSheetHeader from 'components/Header/CheatSheetHeader';
import AnimatedSearchInput from 'components/SearchInput/AnimatedSearchInput';
import {SearchSuggestions} from 'components/Autocomplete/SearchSuggestions';

import SearchServiceFactory from 'services/Search/SearchServiceFactory';
import {DOCUMENTS_FILE_NAME, INDEX_FILE_NAME} from 'resourceNames';

export default class GitCheatSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            suggestions: new Map()
        };
        this.searchService = SearchServiceFactory.createNew({documentsFileName: DOCUMENTS_FILE_NAME, indexFileName: INDEX_FILE_NAME});
    }

    async componentDidMount() {
        await this
            .searchService
            .loadDocumentsAndData();
    }

    searchByPrefix = (query) => {
        const suggestions = query.length > 1
            ? this.searchService.searchByPrefix(query)
            : undefined;

        this.setState({suggestions: suggestions});
    }

    render() {

        const {suggestions} = this.state;

        return (
            <div>
                <CheatSheetHeader
                    hasBackButton
                    hasSidebarButton
                    onBackClick={() => console.log('back clicked')}
                    onSidebarClick={() => console.log('sidebar clicked')}
                    renderHeaderContent={() =>  
                        <AnimatedSearchInput
                            onSearchQueryChange={(query) => this.searchByPrefix(query)}
                            placeholder="Need a quick git refresher ?"
                            label="Git cheat sheet" />}
                />
                {suggestions && <SearchSuggestions suggestions={suggestions} />}
                
            </div>);
    }
}
