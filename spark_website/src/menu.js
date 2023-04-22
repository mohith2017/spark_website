let menu = [];

const TimeLine = function (name, image, components) {
  this.name = name;
  this.image = image;
  this.components = components;
};

const addApptoLine = (name, image, components) => {
  const newTimeLine = new TimeLine(name, image, components);
  menu = [...menu, newTimeLine];
};

addApptoLine(
  'Fill Basic Details',
  'components/app-images/degree.png',
  'University, Degree, Location'
);

addApptoLine(
  'Upload Documents',
  'components/app-images/doc.png',
  'Transcripts, SSN'
);

addApptoLine(
  'Pay the Application fee',
  'components/app-images/fee.png',
  'Credit card, Apple/Google Pay'
);

// addSaladToMenu(
//   'Chicken Caesar Salad',
//   'components/salad-images/salad3.png',
//   'Chicken, lettuce, pasta, garlic',
//   '7.90'
// );

// addSaladToMenu(
//   'Israeli Spinach Salad',
//   'components/salad-images/salad6.png',
//   'Chicken, spinach, carrot, jalapeno, onion, seed',
//   '10.90'
// );

// addSaladToMenu(
//   'Roast Beef Coleslaw Salad',
//   'components/salad-images/salad4.png',
//   'Roasted beef, coleslaw, tomato, onion',
//   '8.90'
// );

export const loadMenuPage = () => {
  const contentDiv = document.querySelector('#content');

  const menuContainer = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const saladGrid = document.createElement('div');

  menuContainer.classList.add('menu');
  saladGrid.classList.add('salad-grid');

  const initalAnimationDuration = 0.17;
  let animationDuration = initalAnimationDuration;

  for (const salad of menu) {
    const AppCard = document.createElement('div');

    const AppImage = document.createElement('img');
    const AppName = document.createElement('h2');
    const AppFee = document.createElement('p');
    // const saladPrice = document.createElement('p');
    // const addToCartButton = document.createElement('button');
    // const plusIcon = document.createElement('img');

    menuHeading.classList.add('page-heading');
    AppCard.classList.add('salad-card');
    AppImage.classList.add('salad-card-image');
    AppName.classList.add('salad-card-name');
    AppFee.classList.add('salad-card-ingredients');
    // saladPrice.classList.add('salad-card-price');
    // addToCartButton.classList.add('salad-card-add-to-cart');
    // plusIcon.classList.add('salad-card-plus-icon');

    AppImage.src = salad.image;
    // plusIcon.src = 'components/icons/plus.svg';

    menuHeading.textContent = 'Our Process';
    AppName.textContent = salad.name;
    AppFee.textContent = salad.components;
    // saladPrice.textContent = `€${salad.price}`;

    AppCard.style.animationDuration = `${animationDuration}s`;
    animationDuration += initalAnimationDuration;

    // addToCartButton.append(plusIcon);
    AppCard.append(
      AppImage,
      AppName,
      AppFee
      // saladPrice,
      // addToCartButton
    );

    saladGrid.append(AppCard);
  }

  menuContainer.append(menuHeading, saladGrid);
  contentDiv.append(menuContainer);
};

// export const updateCartOnClick = () => {
//   const addToCartButtons = document.querySelectorAll('.salad-card-add-to-cart');
//   const cartIcon = document.querySelector('.cart-icon');
//   for (const button of addToCartButtons) {
//     button.addEventListener('click', () => {
//       cartIcon.classList.add('shake');
//       cartIcon.addEventListener('animationend', () =>
//         cartIcon.classList.remove('shake')
//       );
//       const currentItemCount = parseInt(cartIcon.dataset.count);
//       if (currentItemCount >= 9) {
//         cartIcon.dataset.count = '9+';
//         return;
//       }
//       cartIcon.dataset.count = currentItemCount + 1;
//       cartIcon.classList.add('cart-has-item');
//     });
//   }
// };
