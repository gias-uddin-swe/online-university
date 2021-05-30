export const ADD_TO_CART = "ADD_USER_INFO";
export const REMOVE_FROM_CART = "REMOVE_USER_INFO";

export const addToCart = (id, name) => {
  return { type: ADD_TO_CART, id, name };
};

export const RemoveFromCart = (id) => {
  return { type: REMOVE_FROM_CART, id };
};
