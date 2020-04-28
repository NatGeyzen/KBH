import React from 'react';
import { connect } from 'react-redux';

import { togglePageMode } from './../../store/actions/actions';
import toggleLeft from '../../assets/images/toggle.png';
import toggleRight from '../../assets/images/toggle-right.png';
import './TogglePageMode.css';

const TogglePageModeContainer = props => {

    let toggleIcon;
    let toggleIconAlt;

    const { pageModeToLearn, togglePageMode } = props;

    if (pageModeToLearn) {
        toggleIcon = toggleLeft;
        toggleIconAlt = 'Toggle Button in left position';
    } else {
        toggleIcon = toggleRight;
        toggleIconAlt = 'Toggle Button in right position';
        
    }       

    return (
        <div className="ToggleContainer">
            <div className="ToggleTextLeft">Learn from Kevin</div>
            <button 
                className="ToggleButton"
                onClick={() => togglePageMode()}>
                <img src={toggleIcon} alt={toggleIconAlt} className="ToggleIcon"/>
            </button>
            <div className="ToggleTextRight">Work with Kevin</div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        pageModeToLearn: state.pageModeToLearn
    }
};

const mapDispatchToProps = dispatch => { 
    return {
        togglePageMode: () => dispatch(togglePageMode())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TogglePageModeContainer);