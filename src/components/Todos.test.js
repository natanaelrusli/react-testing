import Todos from "./Todos"

import axios from "axios"
import { render, screen, waitFor } from "@testing-library/react"

jest.mock('axios')

const dummyTodos = [
    {
        userId: 1,
        id: 1,
        title: 'todo 1',
        completed: false
    },
    {
        userId: 2,
        id: 2,
        title: 'todo 2',
        completed: false
    },
    {
        userId: 3,
        id: 3,
        title: 'todo 3',
        completed: false
    },
    {
        userId: 4,
        id: 4,
        title: 'todo 4',
        completed: false
    },
]

test('todos list', async () => {
    axios.get.mockResolvedValue({ data: dummyTodos })

    render(<Todos />)

    const todoList = await waitFor(() => screen.findAllByTestId('todo'))

    expect(todoList).toHaveLength(4)
})