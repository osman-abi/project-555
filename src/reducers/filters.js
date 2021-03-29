/**
 *  Filter Data Reducers
 * */


const initialState = {
    category: [],
    search: "",
    sortOrder: ""
}

export default (state = initialState, action) => {
   switch (action.type) {
       case "GET_CATEGORY_VALUE":
           return {
               ...state,
               category: action.category
           };
       case "RESULT_SEARCH_VALUE":
           return {
               ...state,
               search: action.search
           };
       case "GET_SORT_BY_VALUE":
           return {
               ...state,
               sortOrder:action.sort_by
           }
       default:
           return state;
   }
}