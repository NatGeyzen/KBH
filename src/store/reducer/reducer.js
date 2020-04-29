import { 
    TOGGLE_PAGE_MODE,
    SET_ACTIVE_PAGE_ONCLICK,
    SET_ACTIVE_PAGE_ONSCROLLUP,
    SET_ACTIVE_PAGE_ONSCROLLDOWN
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
        case SET_ACTIVE_PAGE_ONCLICK:
            console.log('clicked!')
            if (action.pageID !== state.activePageNumber) {
                return {
                    ...state,
                    activePageNumber: action.pageID    
                } 
            } else { 
                return state;
            }
        case SET_ACTIVE_PAGE_ONSCROLLUP:
            return {
                ...state,
                activePageNumber: action.currentPageNumber - 1
            };
        case SET_ACTIVE_PAGE_ONSCROLLDOWN:
            return {
                ...state,
                activePageNumber: action.currentPageNumber + 1
            };
        default:
            return state;
    };
};

export default reducer;