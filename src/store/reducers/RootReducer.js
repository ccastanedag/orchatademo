import { combineReducers } from 'redux';
import categoriesReducer from './CategoriesReducer';
import productsReducer from './ProductsReducer';
import cartReducer from './CartReducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;