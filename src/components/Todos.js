import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Todos() {
    const [todoList, setTodoList] = useState(null)

    useEffect(() => {
        (async () => {
            const todos = await axios.get(
                'https://jsonplaceholder.typicode.com/todos'
            )
            setTodoList(todos.data);
        })()
    }, [])


  return todoList ? (
    <ul>
        {todoList.map((todo, index) => (
            <li key={index} data-testid='todo'>{ todo.title }</li>
        ))}
    </ul>
  ) : (
    <p>Loading...</p>
  )
}

export default Todos