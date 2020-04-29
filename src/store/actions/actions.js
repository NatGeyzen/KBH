import { 
    TOGGLE_PAGE_MODE,
    SET_ACTIVE_PAGE_ONCLICK,
    SET_ACTIVE_PAGE_ONSCROLLUP,
    SET_ACTIVE_PAGE_ONSCROLLDOWN
} from '../actions/actionTypes';

export const togglePageMode = () => {
    return {
        type: TOGGLE_PAGE_MODE,
    };
};

export const setActivePageOnClick = (pageID) => {
    return {
        type: SET_ACTIVE_PAGE_ONCLICK,
        pageID
    };
};

export const setActivePageOnScrollUp = (currentPageNumber) => {
    return {
        type: SET_ACTIVE_PAGE_ONSCROLLUP,
        currentPageNumber
    };
};

export const setActivePageOnScrollDown = (currentPageNumber) => {
    return {
        type: SET_ACTIVE_PAGE_ONSCROLLDOWN,
        currentPageNumber
    };
};