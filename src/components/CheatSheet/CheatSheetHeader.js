import React from 'react';
import PropTypes from 'prop-types';
import RoundButton from 'components/Buttons/RoundButton';
import './CheatSheetHeader.css';

const CheatSheetHeader = ({hasBackButton, hasSidebarButton, renderHeaderContent, onBackClick, onSidebarClick}) => {

    return (
        <div className="cheat-sheet-nav">
                <div className="button left">
                    {hasBackButton && <RoundButton
                        withBorder={false}
                        icon="fa-arrow-left"
                        onClick={() => onBackClick()}/>}
                </div>
                <div className="center">
                    {renderHeaderContent && renderHeaderContent()}
                </div>
                <div className="button right">
                    {hasSidebarButton && <RoundButton
                        withBorder={false}
                        icon="fa-bars"
                        onClick={() => onSidebarClick()}/>}
                </div>
        </div>
    );
};

CheatSheetHeader.propTypes = {
    hasBackButton: PropTypes.bool,
    hasSidebarButton: PropTypes.bool,
    onBackClick: PropTypes.func,
    onSidebarClick: PropTypes.func,
    renderHeaderContent: PropTypes.func
};

export default CheatSheetHeader;