import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CheatSheetHeader from 'components/Header/CheatSheetHeader';
import AnimatedSearchInput from 'components/SearchInput/AnimatedSearchInput';
import {SearchSuggestions} from 'components/Autocomplete/SearchSuggestions';

export default class CheatSheetContainer extends Component {

    static propTypes = {
        searchByPrefixFn : PropTypes.func.isRequired,
        sidebarClickHandler: PropTypes.func.isRequired,
        backClickHandler: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            suggestions: new Map()
        };
    }

    searchByPrefix = (query) => {
        const suggestions = query.length > 1
            ? this.props.searchByPrefixFn(query)
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
                    onBackClick={() => this.props.backClickHandler()}
                    onSidebarClick={() => this.props.sidebarClickHandler(true)}
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
