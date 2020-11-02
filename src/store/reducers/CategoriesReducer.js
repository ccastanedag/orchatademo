export const FETCHING_CATEGORIES = 'FETCHING_CATEGORIES';
export const FETCHING_CATEGORIES_ERROR = 'FETCHING_CATEGORIES_ERROR';
export const FETCHING_CATEGORIES_SUCCESS = 'FETCHING_CATEGORIES_SUCCESS';

const initialState = {
  isFetching: false,
  error: '',
  data: undefined
};

const categoriesReducer = (state = initialState, action) => {
  const { type, data, error } = action;
  switch (type) {
    case FETCHING_CATEGORIES:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_CATEGORIES_ERROR:
      return {
        isFetching: false,
        error
      };
    case FETCHING_CATEGORIES_SUCCESS:
      return {
        isFetching: false,
        error: null,
        data
      };
    default:
      return state;
  }
;}

export default categoriesReducer;