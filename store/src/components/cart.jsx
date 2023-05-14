import React from 'react';
import CartTable from './cartTable';
import CartPrices from './cartPrices';

const Cart = ({ cart, onDelete }) => {
    return (
        <div className="container py-4 " style={{ minHeight: '54vh' }}>
            <div className='row gx-4'>
            {Object.keys(cart).length > 0 && (
                <>
                <div className='col-lg col-12 bg-white rounded'>
                    <CartTable onDelete={onDelete} cart={cart} />
                </div>
                <div className='col-lg-4 col-12 order-lg-last bg-white rounded'>
                    <p style={{ fontWeight: 'bold' }}>Price Summary</p>
                    <CartPrices total={cart.total_cost} />
                    <button 
                        type="button" 
                        className="btn btn-dark w-100 p-2 "
                        >
                        Proceed To Checkout
                    </button>
                </div>
                </>
            )}
            </div>
        </div>
    );
}

export default Cart;