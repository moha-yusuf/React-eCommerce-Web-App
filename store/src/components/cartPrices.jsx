import React from 'react';

const cartPrices = ({ total }) => {
    const deliveryPrice = (total > 50 || total <= 0) ? 0 : 15;
    const final = (total + deliveryPrice).toFixed(2);
    return ( 
        <ul className="list-group list-group-flush"> 
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Subtotal
                <span className="">{total.toFixed(2)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Delivery fee*
                <span className="">{deliveryPrice}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Total
                <span className="">{final}</span>
            </li>
        </ul>
    );
}

export default cartPrices;