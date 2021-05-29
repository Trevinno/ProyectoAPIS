import React from 'react'
import  { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import AddPostIt from '../pages/AddPostIt'

test('Check Add Postits fields are all blank ', () => {
    const {getByTestId} = render(<AddPostIt/>)
    expect(getByTestId('tamano_true').value).toBe(1)
})