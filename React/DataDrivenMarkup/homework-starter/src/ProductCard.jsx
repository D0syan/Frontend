import React from 'react'
import { products } from "./products.js"
import "./ProductCard.css"

export function ProductCard({ productId }) {
    const product = products.find(product => product.id == productId);
    const hasDiscount = product.discount !== null && product.discount !== undefined;

    return (
        <li className='cards'>
            <img src={product.imageUrl} alt={product.title} />
            {hasDiscount ? (
                <div className='prices'>
                    <p className='discount-price'>{product.price - product.discount * product.price} ₽</p>
                    <del><p className='old-price'>{product.price}  ₽</p></del>
                </div>
            ) : (<p className='price'>{product.price}  ₽</p>
            )}
            <h2 className='name'>{product.title}</h2>
        </li>
    );
}

