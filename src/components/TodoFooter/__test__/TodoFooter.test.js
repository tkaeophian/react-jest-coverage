import { render, screen } from '@testing-library/react'

import { BrowserRouter } from "react-router-dom"
import TodoFooter from '../TodoFooter'

const MockToDoFooter = ({numberOfIncompleteTasks}) => {
    return <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
}

describe('TodoFooter component tests', () => {
    it('should render the correct amount of incomplete tasks', () => {
        render(<MockToDoFooter numberOfIncompleteTasks={5} />);
        const paragraphElement = screen.getByText(/5 tasks left/i);
        expect(paragraphElement).toBeInTheDocument();
    });
    it('should render "task" when the number of incomplete tasks is one', () => {
        render(<MockToDoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    it('should be visible to the user when the number of incomplete tasks is one', () => {
        render(<MockToDoFooter numberOfIncompleteTasks={1} />);
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeVisible()
    });
})
