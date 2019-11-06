import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon =({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className='item-count'>{itemCount}</span>
    </div>
)
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

<<<<<<< HEAD
const mapStateToProps = ({cart: {cartItems} }) => {
    console.log('I am being called');
    return({
    itemCount:cartItems.reduce((accumulatedQuantity,cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0
    ) 
    });
};

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
=======
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);
>>>>>>> 787fa3298b844ba5195dff7896af23f411711f3e
