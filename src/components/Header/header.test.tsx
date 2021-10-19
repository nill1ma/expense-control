import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Testing Header Component', ()=>{
    beforeEach(()=>{
        render(<Header />)
    })
    it('Should be found Expense Control text', () => {
      const brand = screen.getByText('Expense Control');
      expect(brand).toBeInTheDocument();
    })
})

