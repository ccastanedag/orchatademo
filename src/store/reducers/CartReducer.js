export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT:
      return [...state, {
        name: payload.name,
        price: payload.price,
        unit: payload.unit
      }];
    case REMOVE_PRODUCT:
      const copyState = [...state];
      const i = copyState.findIndex(product => product.id === payload.id);
      copyState.splice(i, 1);
      return [...copyState];
    default:
      return state;
  }
}

export default cartReducer;