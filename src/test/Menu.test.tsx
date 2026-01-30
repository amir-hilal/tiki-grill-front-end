import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Menu from '../pages/Menu';
import { menuItems } from '../data/menu';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>,
  );
};

describe('Menu Page', () => {
  it('renders all menu items', () => {
    renderWithProviders(<Menu />);

    // Check that all menu items are rendered
    menuItems.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });

  it('displays menu item prices', () => {
    renderWithProviders(<Menu />);

    // Check for some specific prices
    expect(screen.getByText('$15.00')).toBeInTheDocument();
    expect(screen.getByText('$17.00')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
  });

  it('shows the special note about souvenir cups', () => {
    renderWithProviders(<Menu />);

    expect(
      screen.getByText(
        /Lemonade\/Sweet Tea come in a 42 OZ souvenir cup with free refills/i,
      ),
    ).toBeInTheDocument();
  });

  it('displays family size badges', () => {
    renderWithProviders(<Menu />);

    const familySizeBadges = screen.getAllByText('Family Size');
    expect(familySizeBadges.length).toBeGreaterThan(0);
  });

  it('displays choice of meat badges', () => {
    renderWithProviders(<Menu />);

    const choiceOfMeatBadges = screen.getAllByText('Choice of Meat');
    expect(choiceOfMeatBadges.length).toBeGreaterThan(0);
  });

  it('organizes items by category', () => {
    renderWithProviders(<Menu />);

    expect(screen.getByText('Mains')).toBeInTheDocument();
    expect(screen.getByText('Sides')).toBeInTheDocument();
    expect(screen.getByText('Sweets')).toBeInTheDocument();
    expect(screen.getByText('Drinks')).toBeInTheDocument();
  });
});
