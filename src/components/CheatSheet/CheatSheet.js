import React, {Component} from 'react';
import PropTypes from 'prop-types'
import CheatSheetHeader from './CheatSheetHeader';
import AnimatedSearchInput from 'components/AnimatedSearchInput';
import {SearchSuggestionsGrid} from 'components/SearchSuggestions';

export default class CheatSheet extends Component {

    static propTypes = {
        searchByPrefixFn : PropTypes.func.isRequired,
        sidebarClickHandler: PropTypes.func.isRequired,
        inputLabel: PropTypes.string.isRequired,
        inputDescription: PropTypes.string.isRequired
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
                    hasSidebarButton
                    onSidebarClick={() => this.props.sidebarClickHandler(true)}
                    renderHeaderContent={() =>  
                        <AnimatedSearchInput
                            onSearchQueryChange={(query) => this.searchByPrefix(query)}
                            placeholder={this.props.inputDescription}
                            label={this.props.inputLabel} />}
                />
                {suggestions && <SearchSuggestionsGrid suggestions={suggestions} />}
                {/*suggestions && <SearchSuggestions suggestions={suggestions} />*/}
            </div>);
    }
}
