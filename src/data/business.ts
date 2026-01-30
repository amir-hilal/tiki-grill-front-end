export interface BusinessInfo {
  name: string;
  contactName: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  phone: string;
  email: string;
}

export const businessInfo: BusinessInfo = {
  name: 'Tiki Grill',
  contactName: 'Jana Andary',
  address: {
    street: 'Po box 98832',
    city: 'Raleigh',
    state: 'North Carolina',
    zip: '27624',
  },
  phone: '9193355288',
  email: 'tikigrill@hotmail.com',
};

export const formatPhone = (phone: string): string => {
  return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6)}`;
};
