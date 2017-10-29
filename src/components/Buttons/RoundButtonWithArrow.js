import React from 'react';
import PropTypes from 'prop-types';
import './RoundButton.css';

const RoundButtonWithArrow = ({style, arrowDirection, withBorder, onClick}) => {

    const inlineStyle = {
        borderWidth: withBorder ? 1 : 0,
        ...style
    };

    return (
        <div onClick={() => onClick()} className="roundButton" style={inlineStyle}>
            <i className={`fa fa-angle-${arrowDirection}`}></i>
        </div>
    );
};

RoundButtonWithArrow.propTypes = {
    style: PropTypes.object,
    onClick: PropTypes.func.isRequired,
    withBorder: PropTypes.bool.isRequired,
    arrowDirection: PropTypes.string.isRequired
}

export default RoundButtonWithArrow;