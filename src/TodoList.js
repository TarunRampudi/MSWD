import React, { useState } from 'react';
const TodoList = ({ todos }) => {
const [todoList, setTodoList] = useState(todos);
const toggleCompletion = (id) => {
setTodoList((prevTodoList) =>
prevTodoList.map((todo) =>
todo.id === id ? { ...todo, completed: !todo.completed } : todo
)
);
};
return (
<div>
<h2>Todo List</h2>
<table>
<tr>
<th>Task</th>
<th>Completed</th>
</tr>
{todoList.map((todo) => (
<tr key={todo.id}>
<td>{todo.title}</td>
<td>
<input
type="checkbox"
checked={todo.completed}
onChange={() => toggleCompletion(todo.id)}
/>
</td>
</tr>
))}
</table>
</div>
);
};
export default TodoList;