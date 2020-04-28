import { 
    TOGGLE_PAGE_MODE,
    NAVIGATE_PAGES_ONCLICK,
    NAVIGATE_PAGES_ONSCROLLUP,
    NAVIGATE_PAGES_ONSCROLLDOWN
} from '../actions/actionTypes';

export const togglePageMode = () => {
    return {
        type: TOGGLE_PAGE_MODE
    };
};

export const navigatePagesOnClick = (pageID) => {
    return {
        type: NAVIGATE_PAGES_ONCLICK,
        pageID
    };
};

export const navigatePagesOnScrollUp = (currentPageNumber) => {
    return {
        type: NAVIGATE_PAGES_ONSCROLLUP,
        currentPageNumber
    };
};

export const navigatePagesOnScrollDown = (currentPageNumber) => {
    return {
        type: NAVIGATE_PAGES_ONSCROLLDOWN,
        currentPageNumber
    };
};