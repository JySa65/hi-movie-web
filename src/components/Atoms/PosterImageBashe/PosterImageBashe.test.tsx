import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PosterImageBashe from './index';

describe('Atoms PosterImageBashe', () => {
  test('PosterImageBashe Component', () => {
    render(<PosterImageBashe average={500} />);
    expect(screen.getByText(/500/i)).toBeDefined();
  });
});
