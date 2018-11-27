import React from 'react'
import CartItem from '../cart-item/cart-item'

const CartList = (props) => {
    return (
        <div>
            <h1>Cart Total: ${props.total}.00</h1>
            <ul>
                {props.cartList.map(
                    (book, idx) => {
                        return <CartItem key={idx} book={book} />
                    }
                )}
            </ul>
        </div>
    )
}

export default CartList