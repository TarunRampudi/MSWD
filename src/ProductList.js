import React, { useState } from 'react';
const ProductList = ({ products }) => {
const [cart, setCart] = useState([]);
const addToCart = (product) => {
setCart((prevCart) => [...prevCart, product]);
};
return (
<div>
<table>
<tr>
<th>Product Name</th>
<th>Price</th>
<th>Action</th>
</tr>
{products.map((product) => (
<tr key={product.id}>
<td>{product.name}</td>
<td>${product.price}</td>
<td>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</td>
</tr>))}
</table>
<h2>Cart</h2>
<table>
<tr>
<th>Product Name</th>
<th>Price</th>
</tr>
{cart.map((product) => (
<tr key={product.id}>
<td>{product.name}</td>
<td>${product.price}</td>
</tr>
))}
</table>
</div>
);
};
export default ProductList;
