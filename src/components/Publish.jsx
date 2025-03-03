import React from 'react'
import PublishLis from './PublishLis'
export default function Todos({ todos, setTodos, filteredTodo }) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodo.map((todo) => (
                    <PublishLis todos={todos} todo={todo} todotext={todo.text} key={todo.id} id={todo.id} setTodos={setTodos} filteredTodo={filteredTodo} />
                ))}
            </ul>
        </div>
    )
}
