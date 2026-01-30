import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// JSON-LD Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://tikigrill.netlify.app/#organization',
      name: 'Tiki Grill',
      url: 'https://tikigrill.netlify.app',
      logo: 'https://tikigrill.netlify.app/tiki-grill-logo.png',
      image: 'https://tikigrill.netlify.app/tiki-grill-logo.png',
      description:
        'Festival food perfection! Serving Gyros, Jumbo Turkey Legs, Blooming Onions, Garbage Fries, Funnel Cakes, and more at festivals and events.',
      telephone: '919-335-5288',
      email: 'tikigrill@hotmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Po box 98832',
        addressLocality: 'Raleigh',
        addressRegion: 'NC',
        postalCode: '27624',
        addressCountry: 'US',
      },
      priceRange: '$5-$20',
      servesCuisine: 'Festival Food',
    },
    {
      '@type': 'Menu',
      '@id': 'https://tikigrill.netlify.app/#menu',
      name: 'Tiki Grill Menu',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Mains',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Jumbo Puka Dog',
              offers: {
                '@type': 'Offer',
                price: '15.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Steak & Cheese',
              offers: {
                '@type': 'Offer',
                price: '17.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Gyro',
              offers: {
                '@type': 'Offer',
                price: '17.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Jumbo Turkey Leg',
              offers: {
                '@type': 'Offer',
                price: '20.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Polish & Italian Sausage',
              offers: {
                '@type': 'Offer',
                price: '17.00',
                priceCurrency: 'USD',
              },
            },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Sides',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Garbage Fries W/ Choice of Meat',
              offers: {
                '@type': 'Offer',
                price: '20.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Blooming Onion',
              offers: {
                '@type': 'Offer',
                price: '20.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Loaded Nachos W/ Meat',
              offers: {
                '@type': 'Offer',
                price: '20.00',
                priceCurrency: 'USD',
              },
            },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Sweets',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Funnel Cake',
              offers: {
                '@type': 'Offer',
                price: '15.00',
                priceCurrency: 'USD',
              },
            },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Drinks',
          hasMenuItem: [
            {
              '@type': 'MenuItem',
              name: 'Lemonade',
              offers: {
                '@type': 'Offer',
                price: '10.00',
                priceCurrency: 'USD',
              },
            },
            {
              '@type': 'MenuItem',
              name: 'Sweet Tea',
              offers: {
                '@type': 'Offer',
                price: '10.00',
                priceCurrency: 'USD',
              },
            },
          ],
        },
      ],
    },
  ],
};

// Inject structured data into the document head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
