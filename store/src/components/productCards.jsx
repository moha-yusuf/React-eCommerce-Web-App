import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './productCard.jsx';

const ProductCards = ({ products }) => {
    return ( 
        <div className='row g-2 g-md-3 g-lg-4'>
            {products.map(product => (
                <div key={product.id} className='col-6 col-sm-6 col-md-6 col-lg-4 col-xl-3'>
                    <Link className='text-dark text-decoration-none' to={`/products/${product.id}`}>
                        <ProductCard
                        img={product.image_url}
                        name={product.name}
                        price={product.price}
                        category={product.category}
                        />
                    </Link>              
                </div>
            ))}
            <div className='clearfix'/>
        </div>
    );
}

export default ProductCards;