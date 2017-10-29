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

const SuggestionSection = ({sectionName, items, onMoreClick}) => {
    return (
        <section>
            <h3>{sectionName}</h3>
            <SuggestionSectionList items={items} onMoreClick={onMoreClick} />
        </section>
    );
}

SuggestionSection.propTypes = {
    sectionName: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMoreClick: PropTypes.func
}

export const SearchSuggestions = ({suggestions, onMoreClick}) => {

    const suggestionItems =  suggestions && [...suggestions].map(([key, value]) => 
        <SuggestionSection 
            key={key}
            sectionName={key} 
            items={value} 
            onMoreClick={onMoreClick} />); 

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
