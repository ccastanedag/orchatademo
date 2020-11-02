import db from '../../firebase/config';
import {
  FETCHING_CATEGORIES,
  FETCHING_CATEGORIES_ERROR,
  FETCHING_CATEGORIES_SUCCESS
} from '../reducers/CategoriesReducer';

const fetchingCategories = () => {
  return {
    type: FETCHING_CATEGORIES
  }
}

const fetchingCategoriesError = (error) => {
  return {
    type: FETCHING_CATEGORIES_ERROR,
    error
  }
}

const fetchingCategoriesSuccess = (data) => {
  return {
    type: FETCHING_CATEGORIES_SUCCESS,
    data
  }
}

export default function handleFetchingCategories() {
  return (dispatch, getState) => {
    const categoriesRef = db.collection('categories');
    dispatch(fetchingCategories());
    categoriesRef
      .get()
      .then(function (categoriesSnapshot) {
        const categories = categoriesSnapshot.docs.map(category =>{
          return category.data();
        })
        dispatch(fetchingCategoriesSuccess(categories));
      })
      .catch(error => fetchingCategoriesError(error))
  }
}