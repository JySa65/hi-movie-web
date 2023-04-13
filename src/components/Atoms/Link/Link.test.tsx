import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Link from './index';

describe('Atoms Link', () => {
  test('Link Component', () => {
    render(
      <BrowserRouter>
        <Link
          name="Home"
          path="home"
          close={() => {
            console.log('close');
          }}
          open={false}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/Home/i)).toBeDefined();
  });
});
