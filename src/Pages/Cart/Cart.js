import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../store/actions/cart';
import Loading from '../../components/Loading/Spinner/Spinner'
import "./Cart.scss";
import Item from './Item/Item';
import Summary from './Summary/Summary';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = () => {
    const dispatch = useDispatch()

    const { cart, loading } = useSelector((state) => state.cart)
    useEffect(() => {
        dispatch(getCart())
    }, [dispatch])
    if (loading) {
        return <Loading />
    }
    if (!loading && cart.total_items === 0) {
        return <EmptyCart />
    }
    return (
        <main className="cart">
            <div className="container">
                <div className="cart-product-number">
                    Səbət ({cart.total_items} məhsul)
                </div>
                <div className="s-container">
                    <div className="items">
                        {cart?.line_items?.map((el) => {
                            return <Item
                                key={el.id}
                                item_id={el.id}
                                product_id={el.product_id}
                                name={el.variant?.description || el.product_name}
                                price={el.price.raw}
                                image={el.image.url}
                                quantity={el.quantity}
                                options={el?.selected_options}
                            />
                        })}
                    </div>
                    <Summary cart={cart} />
                </div>
            </div>
        </main>
    )
}

export default Cart