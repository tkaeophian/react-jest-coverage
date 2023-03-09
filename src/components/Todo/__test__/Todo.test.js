import { fireEvent, render, screen } from '@testing-library/react'

import { BrowserRouter } from "react-router-dom"
import Todo from '../Todo'

const MockTodo = () => {
    return <BrowserRouter><Todo /></BrowserRouter>
}

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: /Add/i });

    tasks.forEach(task => {
        fireEvent.change(inputElement, { target : { value: task } })
        fireEvent.click(buttonElement)
    });
}

// integration test
describe('Todo component tests', () => {
    it('should render added item to the list element', () => {
        render(<MockTodo />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        // fire events
        fireEvent.change(inputElement, { target : { value: 'Buy Apples' } })
        fireEvent.click(buttonElement)

        // expected
        const listElement = screen.getByText(/Buy Apples/i)
        expect(listElement).toBeInTheDocument();
    });

    it('should render multiple items', () => {
        render(<MockTodo />)
        addTasks(['Buy Apples', 'Buy Bananas', 'Buy Pears'])
        const listElements = screen.getAllByTestId('todo-item')
        expect(listElements.length).toBe(3)
    });

    it('task should not have completed task when initially rendered', () => {
        render(<MockTodo />)
        addTasks(['Buy Apples'])
        const listElement = screen.getByText(/Buy Apples/i)
        expect(listElement).not.toHaveClass('todo-item-active')
    });

    it('task should marked as completed task when clicked', () => {
        render(<MockTodo />)
        addTasks(['Buy Apples'])
        const listElement = screen.getByText(/Buy Apples/i)
        fireEvent.click(listElement)
        expect(listElement).toHaveClass('todo-item-active')
    });
})
