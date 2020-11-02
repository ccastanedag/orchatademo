export const FETCHING_PRODUCTS = 'FETCHING_PRODUCTS';
export const FETCHING_PRODUCTS_ERROR = 'FETCHING_PRODUCTS_ERROR';
export const FETCHING_PRODUCTS_SUCCESS = 'FETCHING_PRODUCTS_SUCCESS';

const initialState = {
  isFetching: false,
  error: '',
  data: undefined
}

const productReducer = (state = initialState, action) => {
  const { type, error, data } = action;
  switch (type) {
    case FETCHING_PRODUCTS:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_PRODUCTS_ERROR:
      return {
        isFetching: false,
        error
      } ; 
    case FETCHING_PRODUCTS_SUCCESS:
      return {
        isFetching: false,
        error: null,
        data
      };
    default: 
    return state;    
  }
}

export default productReducer;