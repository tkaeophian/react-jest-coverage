import { fireEvent, render, screen } from '@testing-library/react'

import AddInput from '../AddInput'

const MockSetTodos = jest.fn()

describe('AddInput component tests', () => {
    it('should render add button element', () => {
        render(<AddInput todos={[]} setTodos={MockSetTodos} />);
        const buttonElement = screen.getByText(/Add/i);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should render input element', () => {
        render(<AddInput todos={[]} setTodos={MockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type into input element', () => {
        render(<AddInput todos={[]} setTodos={MockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target : { value: 'Buy Apples' } })
        expect(inputElement.value).toBe('Buy Apples')
    });

    it('should have empty input value when the button is pressed', () => {
        render(<AddInput todos={[]} setTodos={MockSetTodos} />);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button', { name: /Add/i });
        fireEvent.change(inputElement, { target : { value: 'Buy Apples' } })
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('')
    });
})
