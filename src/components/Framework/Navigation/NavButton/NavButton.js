/* EXTERNAL COMPONENT IMPORTS
---------------------------------------- */
import React from 'react';
import { connect } from 'react-redux';

/* INTERNAL FUNCTION IMPORTS
---------------------------------------- */
import { setActivePageOnClick } from './../../../../store/actions/actions';

/* STYLE IMPORTS
---------------------------------------- */
import './NavButton.css';



/* NAVBUTTON COMPONENT
---------------------------------------- */
const NavButton = props => {

    const { setActivePageOnClick } = props;

    return (
        <button 
            className={props.buttonClassName}
            onClick={props.show ? () => setActivePageOnClick(props.id) : props.hoverToggleOn}
            onMouseOver={props.hoverToggleOn}
            onMouseLeave={props.hoverToggleOff}>
            {props.show ? 
                <li className="NavListItem">
                    <img src={props.icon} alt={props.alt} className="NavImage" />
                    <span className="NavPageName">{props.pageName}</span>
                </li>
                : null 
            }
        </button>
    )
}

/* REDUX DISPATCH PROPS
---------------------------------------- */
const mapDispatchToProps = dispatch => {
    return {
        setActivePageOnClick: (pageID) => dispatch(setActivePageOnClick(pageID))
    };
};


/* COMPONENT EXPORT
---------------------------------------- */
export default connect(null, mapDispatchToProps)(NavButton);