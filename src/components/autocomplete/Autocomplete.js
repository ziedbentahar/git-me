import React, {Component} from 'react';
import {SearchSuggestions} from './SearchSuggestions';
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

        const suggestions = value.length > 1 ? this
            .props
            .searchByPrefixFn(value) : 
            null;
      
        if (suggestions) {
            this.setState({suggestions: suggestions});
        }  else {
            this.setState({suggestions: null});
        }

    }

    render() {
        return (
            <div className="search">
                <label>
                    <input type="text" required onKeyUp={this.searchByPrefix}/>
                    <div className="label-text">
                        <i className="fa fa-search"></i>
                        Git me
                    </div>
                    <div className="placeholder">Looking for some git help?</div>
                </label>
                
                <SearchSuggestions
                    className="search-suggestions"
                    suggestions={this.state.suggestions}
                    onMoreClick={this.handleRequestMoreResults}/>
            </div>
        );
    }
}
