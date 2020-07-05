import React, { useState, useEffect } from 'react';
import Product from '../../components/Product/Product';
import Header from '../../components/Header/Header';
import ProductDetails from '../../components/ProductDetails/ProductDetails';

import { getProducts } from '../../providers/api';

import './Products.scss';

function Products() {
    const [products, setProducts] = useState()
    const [product, setProduct] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
        getClothes();
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [])

    async function getClothes() {
        const { products } = await getProducts()
        setProducts(products)
    }

    function openModal(product) {
        setProduct(product)
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="products-page">
            <Header />
            <section className="products-list">
                {products && products.map((product, index) => (
                    <Product key={index} product={product} onClick={openModal}/>
                ))}
                <ProductDetails
                    product={product}
                    closeModal={closeModal}
                    isOpen={modalIsOpen} />
            </section>
        </div>
    )
}

export default Products;