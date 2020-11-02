import db from '../../firebase/config';
import {
  FETCHING_PRODUCTS,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS_SUCCESS
} from '../reducers/ProductsReducer';

const fetchingProducts = () => {
  return {
    type: FETCHING_PRODUCTS
  }
}

const fetchingProductsError = (error) => {
  return {
    type: FETCHING_PRODUCTS_ERROR,
    error
  }
}

const fetchingProductsSuccess = (data) => {
  return {
    type: FETCHING_PRODUCTS_SUCCESS,
    data
  }
}

export default function handleFetchingProducts(category) {
  return (dispatch, getState) => {
    const productsRef = db.collection('products').where("category", "==", category);
    dispatch(fetchingProducts());
    productsRef
      .get()
      .then(function (productsSnapshot) {
        const products = productsSnapshot.docs.map(product =>{
          return product.data();
        })
        dispatch(fetchingProductsSuccess(products));
      })
      .catch(error => fetchingProductsError(error))
  }
}