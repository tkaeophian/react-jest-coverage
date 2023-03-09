import { render, screen } from '@testing-library/react'

import Header from '../Header'

describe('Header component tests', () => {
    it('should render same text passed into title prop', () => {
        render(<Header title='My header' />);
        const headerElement = screen.getByText(/My header/i);
        expect(headerElement).toBeInTheDocument();
    });

    // finding element by role
    it('should find heading role element', () => {
        render(<Header title='My header' />);
        const headingElement = screen.getByRole("heading");
        expect(headingElement).toBeInTheDocument();
    });

    // finding element by role and value
    it('should find heading role element with same test passed into title prop', () => {
        render(<Header title='My header' />);
        const headingElement = screen.getByRole("heading", { name: "My header" });
        expect(headingElement).toBeInTheDocument();
    });

    // get element by test id
    it('should get element by test id', () => {
        render(<Header title='My header' />);
        const headingElement = screen.getByTestId("heading-1");
        expect(headingElement).toBeInTheDocument();
    });

    // find element by test id async
    it('should find element by test id', async () => {
        render(<Header title='My header' />);
        const headingElement = await screen.findByTestId("heading-1");
        expect(headingElement).toBeInTheDocument();
    });
})
