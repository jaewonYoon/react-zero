import {createSelector} from 'reselect';
import cartItem from '../../components/cart-item/cart-item.component';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems], 
    cartItems => 
        cartItems.reduce(
        (accumulatedQuantity, catItem) => 
          accumulatedQuantity + cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => 
                accumulatedQuantity + cartItem.quantity *cartItem.price,
                0
        )
)