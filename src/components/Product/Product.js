import React from 'react';

import logo from '../../logo.png';
import './Product.scss';

function Product({ product, onClick }) {

    return (
        <div className="item-product"
        onClick={() => onClick(product)}>
            <div className="product-image">
                {product.on_sale && <p className="discount-flag">{product.discount_percentage} OFF</p>}
                <img src={product.image || logo} alt={product.name} />
            </div>
            <p>{product.name}</p>
        </div>
    )
}

export default Product;