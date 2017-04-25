const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
  { name: 'Twinkies', price: 7.99, discount: .45 },
  { name: 'Oreos', price: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 },
];

function getTotalAmountForProducts(products, callback, initialValue) {
  let totalPrice = initialValue;

  products.forEach(product => {
    totalPrice = callback(totalPrice, product);
  });

  return totalPrice;
}

function callback(totalPrice, product) {
  if (product.price < 7) {
    return totalPrice + product.price;
  }
  return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback, 0)); // still prints 11.5. Yeah!
