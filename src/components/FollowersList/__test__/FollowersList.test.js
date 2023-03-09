import { render, screen } from '@testing-library/react'

import { BrowserRouter } from "react-router-dom"
import FollowersList from '../FollowersList'

const MockFollowersList = () => {
    return <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
}

describe('FollowersList component tests', () => {
    it('should render follower item element', async () => {
        render(<MockFollowersList />);
        const followerDivElement = await screen.findByTestId('follower-item-0')
        expect(followerDivElement).toBeInTheDocument();
    });

    it('should render multiple follower items elements', async () => {
        render(<MockFollowersList />);
        const followerDivElements = await screen.findAllByTestId(/follower-item-/i)
        expect(followerDivElements.length).toBe(2)
    }); 
})
