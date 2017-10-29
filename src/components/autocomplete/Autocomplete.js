import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {SearchSuggestions} from './SearchSuggestions';
import './Autocomplete.css';

export default class Autcomplete extends Component {

    static propTypes = {
        searchByPrefixFn: PropTypes.func.isRequired
    }

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

    focus = () => {
        this.textInput.focus();
    }

    handleRequestMoreResults = (e) => {}

    searchByPrefix = (e) => {
        const value = e.target.value;

        const suggestions = value.length > 1 ? 
            this.props.searchByPrefixFn(value) : 
            undefined;
      
        this.setState({suggestions: suggestions});
      
    }

    render() {
        return (
            <div className="search">
                <label>
                    <input ref={(input) => this.textInput = input} type="text" required onKeyUp={this.searchByPrefix}/>
                    <div className="label-text">
                        <i className="fa fa-search"></i>
                        Git cheat sheet
                    </div>
                    <div className="placeholder">Looking for some git help?</div>
                </label>
                
               {this.state.suggestions && <SearchSuggestions
                    className="search-suggestions"
                    suggestions={this.state.suggestions}
                    onMoreClick={this.handleRequestMoreResults}/>}
            </div>
        );
    }
}
