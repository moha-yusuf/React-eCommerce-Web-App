import React from 'react';

const ProductCard = ({ img, name, price, category }) => {
    return (
        <div className="card">
            <img className='card-img-top' src={img} alt=""/>
            <div className='card-body d-flex flex-column align-items-start text-start' style={{ height: 120 }}>
                <h6 className="card-title">{name}</h6>
                <p className="card-subtitle mb-2 text-muted">{category.name}</p>
                <p className="card-text ml-0">${price}</p>
            </div>
        </div>
    );
}

export default ProductCard;