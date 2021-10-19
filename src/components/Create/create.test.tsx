import { render, screen } from '@testing-library/react';
import Create from '.';

describe('Testing Header Component', ()=>{
    beforeEach(()=>{
        render(<Create />)
    })
    it('Should be found an input file text', async () => {
      const category = await screen.findByPlaceholderText('Origin')
      expect(category).toBeInTheDocument()
    })
})

