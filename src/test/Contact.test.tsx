import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Contact from '../pages/Contact';
import { businessInfo, formatPhone } from '../data/business';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <HelmetProvider>
      <BrowserRouter>{component}</BrowserRouter>
    </HelmetProvider>,
  );
};

describe('Contact Page', () => {
  it('renders contact information', () => {
    renderWithProviders(<Contact />);

    expect(screen.getByText(formatPhone(businessInfo.phone))).toBeInTheDocument();
    expect(screen.getByText(businessInfo.email)).toBeInTheDocument();
    expect(screen.getByText(businessInfo.contactName)).toBeInTheDocument();
  });

  it('has clickable phone link', () => {
    renderWithProviders(<Contact />);

    const phoneLink = screen.getByText(formatPhone(businessInfo.phone));
    expect(phoneLink).toHaveAttribute('href', `tel:${businessInfo.phone}`);
  });

  it('has clickable email link', () => {
    renderWithProviders(<Contact />);

    const emailLinks = screen.getAllByText(businessInfo.email);
    const emailLink = emailLinks[0]; // Get the first email link
    expect(emailLink).toHaveAttribute('href', `mailto:${businessInfo.email}`);
  });

  it('displays the contact form', () => {
    renderWithProviders(<Contact />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('displays booking information', () => {
    renderWithProviders(<Contact />);

    expect(screen.getByText(/Book Us for Your Event/i)).toBeInTheDocument();
  });

  it('displays address information', () => {
    renderWithProviders(<Contact />);

    expect(screen.getByText(new RegExp(businessInfo.address.street, 'i'))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(businessInfo.address.city, 'i'))).toBeInTheDocument();
  });
});
