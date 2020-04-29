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

    const { activePage, setActivePageOnClick } = props;

    return (
        <button 
            className={props.id === activePage ? props.navItemClass + ' ActiveNav' : props.navItemClass}
            onClick={props.show ? () => setActivePageOnClick(props.id) : props.hoveron }
            onMouseEnter={props.hoveron}
            onMouseLeave={props.hoverdone}>
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
const mapStateToProps = state => {
    return {
        activePage: state.activePageNumber
    };
};
const mapDispatchToProps = dispatch => {
    return {
        setActivePageOnClick: (pageID) => dispatch(setActivePageOnClick(pageID))
    };
};


/* COMPONENT EXPORT
---------------------------------------- */
export default connect(mapStateToProps, mapDispatchToProps)(NavButton);