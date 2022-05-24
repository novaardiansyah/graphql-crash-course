const mainCards = [
  {
    title: 'Recently Viewed',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  {
    title: 'Looking for a Gift',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  }
];

const animals = [
  {
    title: '7-Year-Old Puppy',
    name: 'Bella',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    rating: 4.5,
    price: 25.99,
    estimatedDelivery: '2-3 weeks',
    description: [
      `Was born on the 17th of February 2020. She is a pure black puppy and she has beautiful eyes with brown hair. Her parents are a male and female black puppy, and they are about 7 years old. Due to the quarantine situation, they couldn't meet and play together. So, my cousin and I decided to take care of her for a few days until they get back from their vacation.`,
      `It was a very important moment in our quarantine, as we were not only caring for Bella, but also preparing our life for when they come back. We have to prepare ourselves, our household and our family for new life and new things. For example, after the quarantine period is over, we will have to prepare the house for Bella and her puppies. We will have to buy food for them.`,
    ],
    stock: 10,
    onSale: true,
    slug: '7-year-old-puppy',
  },
  {
    title: 'Baby Kitten',
    name: 'Molly',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    rating: 4.5,
    price: 25.99,
    estimatedDelivery: '2-3 weeks',
    description: [
      `Was born on the 17th of February 2020. She is a pure black puppy and she has beautiful eyes with brown hair. Her parents are a yakus and loly`,
      `It was a very important moment in our quarantine, as we were not only caring for Bella, but also preparing our life for when they come back. We have to prepare ourselves, our household and our family for new life and new things. For example, after the quarantine period is over, we will have to prepare the house for Bella and her puppies. We will have to buy food for them.`,
    ],
    stock: 10,
    onSale: true,
    slug: 'baby-kitten',
  }
];

module.exports = { mainCards, animals };