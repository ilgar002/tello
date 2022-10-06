import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCartContents } from '../../store/actions/cart';
import Loading from '../../components/Loading/Spinner/Spinner'
import "./Cart.scss";
import Item from './Item/Item';
import Summary from './Summary/Summary';

const Cart = () => {
    const dispatch = useDispatch()
    const { cart, loading } = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getCartContents())
    }, [dispatch, cart.length])
    console.log(cart);
    return (
        <main className="cart">

            {loading ? <Loading /> : <div className="container">
                <div className="cart-product-number">
                    Səbət (5 məhsul)
                </div>
                <div className="s-container">
                    <div className="items">
                        {cart?.map((el) => {
                            return <Item
                                key={el.id}
                                item_id={el.id}
                                name={el.product_name}
                                price={el.price.raw}
                                image={el.image.url}
                                quantity={el.quantity}
                            // color={"red"}
                            />

                        })}
                    </div>
                    <Summary />
                </div>
            </div>}

        </main>
    )
}

export default Cart