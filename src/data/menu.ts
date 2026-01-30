export type MenuCategory = 'Mains' | 'Sides' | 'Sweets' | 'Drinks';

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: MenuCategory;
  description: string;
  image?: string;
  familySize?: boolean;
  choiceOfMeat?: boolean;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  // Mains
  {
    id: 'jumbo-puka-dog',
    name: 'Jumbo Puka Dog',
    price: 15.0,
    category: 'Mains',
    description: 'A classic festival favorite',
    image: '/jumbo-puka-dog.png',
  },
  {
    id: 'steak-and-cheese',
    name: 'Steak & Cheese',
    price: 17.0,
    category: 'Mains',
    description: 'Tender steak with melted cheese',
    image: '/steak-and-cheese.png',
  },
  {
    id: 'gyro',
    name: 'Gyro',
    price: 17.0,
    category: 'Mains',
    description: 'Authentic gyro with tzatziki sauce',
    image: '/gyro.png',
    featured: true,
  },
  {
    id: 'hula-hula-chicken',
    name: 'Hula Hula Chicken',
    price: 17.0,
    category: 'Mains',
    description: 'Flavorful island-style chicken',
  },
  {
    id: 'jumbo-turkey-leg',
    name: 'Jumbo Turkey Leg',
    price: 20.0,
    category: 'Mains',
    description: 'Massive, juicy smoked turkey leg',
    image: '/jumbo-turkey-leg.png',
    featured: true,
  },
  {
    id: 'polish-and-italian-sausage',
    name: 'Polish & Italian Sausage',
    price: 17.0,
    category: 'Mains',
    description: 'Grilled to perfection',
    image: '/polish-and-italian-sausage.png',
    featured: true,
  },
  {
    id: 'chicken-tender-platter',
    name: 'Chicken Tender Platter',
    price: 20.0,
    category: 'Mains',
    description: 'Crispy chicken tenders with fries',
    image: '/chicken-tender-platter.png',
    familySize: true,
  },
  {
    id: 'hamburger',
    name: 'Hamburger',
    price: 10.0,
    category: 'Mains',
    description: 'Classic burger',
  },
  // Sides
  {
    id: 'garbage-fries',
    name: 'Garbage Fries W/ Choice of Meat',
    price: 20.0,
    category: 'Sides',
    description: 'Loaded fries with your choice of meat',
    image: '/garbage-fries.png',
    familySize: true,
    choiceOfMeat: true,
    featured: true,
  },
  {
    id: 'large-french-fries',
    name: 'Large French Fries',
    price: 12.0,
    category: 'Sides',
    description: 'Crispy golden fries',
  },
  {
    id: 'butterfly-potato-chips',
    name: 'Butterfly Potato Chips',
    price: 15.0,
    category: 'Sides',
    description: 'Crispy spiral-cut potato chips',
  },
  {
    id: 'blooming-onion',
    name: 'Blooming Onion',
    price: 20.0,
    category: 'Sides',
    description: 'Crispy fried onion petals with dipping sauce',
    image: '/blooming-onion.png',
    featured: true,
  },
  {
    id: 'loaded-nachos',
    name: 'Loaded Nachos W/ Meat',
    price: 20.0,
    category: 'Sides',
    description: 'Nachos loaded with meat and toppings',
    image: '/loaded-nachos.png',
    familySize: true,
    choiceOfMeat: true,
  },
  // Sweets
  {
    id: 'funnel-cake',
    name: 'Funnel Cake',
    price: 15.0,
    category: 'Sweets',
    description: 'Classic fried dough dusted with powdered sugar',
    image: '/funnel-cake.png',
    featured: true,
  },
  // Drinks
  {
    id: 'lemonade',
    name: 'Lemonade',
    price: 10.0,
    category: 'Drinks',
    description: 'Freshly made lemonade',
  },
  {
    id: 'sweet-tea',
    name: 'Sweet Tea',
    price: 10.0,
    category: 'Drinks',
    description: 'Southern-style sweet tea',
  },
  {
    id: 'water-and-soda',
    name: 'Water & Soda',
    price: 5.0,
    category: 'Drinks',
    description: 'Bottled water and soft drinks',
  },
];

export const categories: MenuCategory[] = ['Mains', 'Sides', 'Sweets', 'Drinks'];

export const getItemsByCategory = (category: MenuCategory): MenuItem[] => {
  return menuItems.filter((item) => item.category === category);
};

export const getFeaturedItems = (): MenuItem[] => {
  return menuItems.filter((item) => item.featured);
};
