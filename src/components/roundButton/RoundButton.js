import React from 'react';
import PropTypes from 'prop-types';
import './RoundButton.css';

const RoundButtonWithArrow = ({arrowDirection, withBorder, onClick}) => {

    const borderStyle = {
        borderWidth: withBorder ? 1 : 0
    };

    return (
        <div onClick={() => onClick()} className="roundButton" style={borderStyle}>
            <i className={`fa fa-angle-${arrowDirection}`}></i>
        </div>
    );
};

RoundButtonWithArrow.propTypes = {
    onClick: PropTypes.func.isRequired,
    withBorder: PropTypes.bool.isRequired,
    arrowDirection: PropTypes.string.isRequired
}

export default RoundButtonWithArrow;