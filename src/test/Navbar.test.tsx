import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('Navbar Component', () => {
  it('contains all navigation links', () => {
    renderWithRouter(<Navbar />);

    // Check for all navigation links
    const homeLinks = screen.getAllByRole('link', { name: /home/i });
    expect(homeLinks.length).toBeGreaterThan(0);

    expect(screen.getByRole('link', { name: /menu/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('displays the logo', () => {
    renderWithRouter(<Navbar />);

    const logo = screen.getByAltText(/tiki grill logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/tiki-grill-logo.png');
  });

  it('has correct links to pages', () => {
    renderWithRouter(<Navbar />);

    const menuLink = screen.getByRole('link', { name: /menu/i });
    expect(menuLink).toHaveAttribute('href', '/menu');

    const galleryLink = screen.getByRole('link', { name: /gallery/i });
    expect(galleryLink).toHaveAttribute('href', '/gallery');

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '/about');

    const contactLink = screen.getByRole('link', { name: /contact/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('has a mobile menu button', () => {
    renderWithRouter(<Navbar />);

    const mobileMenuButton = screen.getByRole('button', {
      name: /toggle navigation menu/i,
    });
    expect(mobileMenuButton).toBeInTheDocument();
  });
});
