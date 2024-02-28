import React from 'react';
import ProductList from './ProductList';
import TodoList from './TodoList';
const App = () => {
const products = [
{ id: 1, name: 'Product 1', price: 10 },
{ id: 2, name: 'Product 2', price: 20 },
{ id: 3, name: 'Product 3', price: 15 },
];
const todos = [
{ id: 1, title: 'Task 1', completed: false },
{ id: 2, title: 'Task 2', completed: true },
{ id: 3, title: 'Task 3', completed: false },
];
const tableStyle = {
border: '1px solid black',
borderCollapse: 'collapse',
width: '100%',
};
return (
<div>
<h1>Product List and Todo List</h1>
<div style={tableStyle}>
<ProductList products={products} />
</div>
<div style={tableStyle}>
<TodoList todos={todos}/>
</div>
</div>
);
};
export default App;