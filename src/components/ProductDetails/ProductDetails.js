import React, { useState } from 'react';
import Modal from 'react-modal';

import logo from '../../logo.png'
import './ProductDetails.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minHeight: '70vh',
        maxHeight: '70vh',
        minWidth: '80vw',
        maxWidth: '80vw',
    }
};

Modal.setAppElement('body');

function ProductDetails({ product, closeModal, isOpen }) {
    const [sizeSelected, setSize] = useState()

    return (
        <Modal
            closeTimeoutMS={500}
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <button
                className="close-button"
                onClick={closeModal}>
                <i className="fa fa-times" />
            </button>
            {product ?
                <section className="product-details">
                    {product.on_sale && <p className="discount-flag">{product.discount_percentage} OFF</p>}
                    <img src={product.image || logo} alt={product.name} />
                    <div className="details">
                        <p className="title">{product.name}</p>
                        <div className="price-details">
                            {product.on_sale && <p className="regular-price">{product.regular_price}</p>}
                            <p className="actual-price">{product.actual_price}</p>
                            <p className="installments"> em até {product.installments}</p>
                        </div>
                        <div className="sizes">
                            <h3>Tamanhos</h3>
                            {product.sizes.map((size, index) => (
                                <div key={index}
                                    className={size.available && sizeSelected === size ? "size selected" : size.available ? "size" : "size unavailable"}
                                    onClick={() => size.available && setSize(size)}>
                                    <p>{size.size}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> :
                <></>
            }
        </Modal>
    )
}

export default ProductDetails;