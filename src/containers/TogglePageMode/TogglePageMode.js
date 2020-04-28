import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { togglePageMode } from './../../store/actions/actions';
import toggleLeft from '../../assets/images/toggle.png';
import toggleRight from '../../assets/images/toggle-right.png';

const TogglePageModeContainer = props => {

    let toggleIcon;
    let toggleIconAlt;

    if (props.pageModeToLearn) {
        toggleIcon = toggleLeft;
        toggleIconAlt = 'Toggle Button in left position';
    } else {
        toggleIcon = toggleRight;
        toggleIconAlt = 'Toggle Button in right position';
    }

    return (
        <Fragment>
            <div>Learn from Kevin</div>
            <button onClick={togglePageMode}>
                <img src={toggleIcon} alt={toggleIconAlt} />
            </button>
            <div>Work with Kevin</div>
        </Fragment>
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