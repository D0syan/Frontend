import React from 'react'
import { ProductCard } from './ProductCard'
import "./ProductList.css";

export default function ProductList({ products }) {
  return (<ul className='product-list'>
    {products.map(product => (
      <li key={product.id}>
        <ProductCard productId={product.id} />
      </li>
    ))}
  </ul>
  );
}
