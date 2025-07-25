import { render, screen } from '@testing-library/react';
import { Filter } from '../../src/components';
import { vi } from 'vitest';

// Mock useTaskFeatures hook
vi.mock('../../src/hooks', () => ({
  useTaskFeatures: () => ({
    filterTask: vi.fn(),
  }),
}));


describe('Filter component', () => {
  it('renders dropdown with all options', () => {
    render(<Filter />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    expect(screen.getByRole('option', { name: /all/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /completed/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /pending/i })).toBeInTheDocument();

    expect(select).toHaveValue('all');
  });


});
