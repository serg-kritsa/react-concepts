import { createSelector } from 'reselect';

export const selectCartItemsCount = createSelector(
  [state => state.cart.cartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
