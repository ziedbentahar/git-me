import React from 'react';
import PropTypes from 'prop-types';
import './SearchSuggestions.css';

const SuggestionSectionList = ({items, onMoreClick}) => {

    const listItems = items.map((item) =><li key={item.id}>
        <p className="description">{item.description}</p>
        {item.command  && <p className="details">$ {item.command}</p>}
    </li>);

    return (
        <ul>{listItems}</ul>
    );
}

SuggestionSectionList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoreClick: PropTypes.func
}

const SuggestionSection = ({sectionName, items}) => {
    return (
        <section>
            <h3>{sectionName}</h3>
            <SuggestionSectionList items={items} />
        </section>
    );
}

SuggestionSection.propTypes = {
    sectionName: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoreClick: PropTypes.func
}

const SearchSuggestions = ({suggestions}) => {

    const suggestionItems =  [...suggestions].map(([key, value]) => 
        <SuggestionSection 
            key={key}
            sectionName={key} 
            items={value} />); 

    return (
        (suggestions &&
        <div className="search-suggestions">
            {suggestionItems}
        </div>)
    );
};

SearchSuggestions.propTypes = {
    suggestions: PropTypes.object,
    onMoreClick: PropTypes.func
}

export default SearchSuggestions;
