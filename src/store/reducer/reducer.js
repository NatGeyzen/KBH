import { 
    NAVIGATE_PAGES_ONCLICK,
    NAVIGATE_PAGES_ONSCROLLUP,
    NAVIGATE_PAGES_ONSCROLLDOWN,
    TOGGLE_PAGE_MODE
 } from '../actions/actionTypes';

const initialState = {
    pageModeToLearn: true,
    activePageNumber: 1,
    pages: [
      { id: 1, name: 'Home'},
      { id: 2, name: 'About Us' },
      { id: 3, name: 'Blog' },
      { id: 4, name: 'Market Insider' },
      { id: 5, name: 'Home' },
      { id: 6, name: 'Find a Home' },
      { id: 7, name: 'Sell' },
      { id: 8, name: 'Contact ' },
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE_MODE: 
            if (state.pageModeToLearn) {
                return {
                    ...state,
                    pageModeToLearn: false
                } 
            } else {
                return {
                    ...state,
                    pageModeToLearn: true
                }
            }
        case NAVIGATE_PAGES_ONCLICK:
            return {
                ...state,
                activePageNumber: action.pageID
            };
        case NAVIGATE_PAGES_ONSCROLLUP:
            return {
                ...state,
                activePageNumber: action.currentPageNumber - 1
            };
        case NAVIGATE_PAGES_ONSCROLLDOWN:
            return {
                ...state,
                activePageNumber: action.currentPageNumber + 1
            };
        default:
            return state;
    };
};

export default reducer;