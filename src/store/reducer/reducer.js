import { 
    TOGGLE_PAGE_MODE,
    SET_ACTIVE_PAGE_ONCLICK,
    SET_ACTIVE_PAGE_ONSCROLLUP,
    SET_ACTIVE_PAGE_ONSCROLLDOWN
 } from '../actions/actionTypes';

const initialState = {
    pageModeToLearn: true,
    activePageNumber: 1,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_PAGE_MODE: 
            if (state.pageModeToLearn) {
                return {
                    ...state,
                    pageModeToLearn: false,
                    activePageNumber: 1
                } 
            } else {
                return {
                    ...state,
                    pageModeToLearn: true,
                    activePageNumber: 1
                }
            }
        case SET_ACTIVE_PAGE_ONCLICK:
            if (action.pageID !== state.activePageNumber) {
                return {
                    ...state,
                    activePageNumber: action.pageID    
                } 
            } else { 
                return state;
            }
        case SET_ACTIVE_PAGE_ONSCROLLUP:
            if (state.activePageNumber !== 1) {
                console.log('not page 1')
                return {
                    ...state,
                    activePageNumber: state.activePageNumber - 1
                };    
            } else {
                return {
                    ...state,
                    activePagenumber: 4
                }
            }
        case SET_ACTIVE_PAGE_ONSCROLLDOWN:
            if (state.activePageNumber !== 4) {
                console.log('not page 4')
                return {
                    ...state,
                    activePageNumber: state.activePageNumber + 1
                };    
            } else {
                return {
                    ...state,
                    activePagenumber: 1
                }
            }
        default:
            return state;
    };
};

export default reducer;