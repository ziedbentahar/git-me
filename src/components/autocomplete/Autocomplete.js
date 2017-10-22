import React, {Component} from 'react';
import {SearchSuggestions} from './SearchSuggestions';
import groupBy from '../../helpers/groupBy';
import './Autocomplete.css';

export default class Autcomplete extends Component {

    constructor() {
        super();

        this.handleRequestMoreResults = this
            .handleRequestMoreResults
            .bind(this);
        this.searchByPrefix = this
            .searchByPrefix
            .bind(this);

        this.state = {
            suggestions: new Map()
        };
    }

    handleRequestMoreResults = (e) => {}

    searchByPrefix = (e) => {
        const value = e.target.value;
        const result = this
            .props
            .searchByPrefixFn(value);
           
        let suggestions = new Map();
        if (result) {
            suggestions = groupBy(result, 'category');
        } 
        this.setState({suggestions: suggestions});

    }

    render() {
        return (
            <div className="search">
                <label>
                    <input type="text" required onKeyUp={this.searchByPrefix}/>
                    <div className="label-text">Git me
                        <i className="fa fa-search"></i>
                    </div>
                </label>
                <SearchSuggestions
                    suggestions={this.state.suggestions}
                    onMoreClick={this.handleRequestMoreResults}/>
            </div>
        );
    }
}
