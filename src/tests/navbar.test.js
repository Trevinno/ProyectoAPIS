import React from 'react'
import  { fireEvent, render,} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Navbar from '../components/navbar'

test('Check Navbar Buttons', async () => {
    const {getByTestId} = render(<Navbar />)

    const homeButton = getByTestId('go_home')

    fireEvent.click(homeButton)
})