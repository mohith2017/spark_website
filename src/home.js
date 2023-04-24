import 'firebase/database';

export const loadHomePage = () => {
  const contentDiv = document.querySelector('#content');

  const homeContainer = document.createElement('div');
  const homeTextContainer = document.createElement('div');
  const homeImage = document.createElement('img');
  const headline = document.createElement('h1');
  const homeParagraph = document.createElement('p');
  const ctaButton = document.createElement('button');
  const arrowRightIcon = document.createElement('img');

  homeContainer.classList.add('home');
  homeTextContainer.classList.add('home-text');
  homeImage.classList.add('home-image');
  headline.classList.add('headline');
  ctaButton.classList.add('cta-button', 'home-cta-button');

  headline.textContent = 'The KEY to your Student Loan';
  homeParagraph.textContent =
    "Have a stellar profile, but co-signer stopping you from chasing your dreams? We've got you!";
  ctaButton.textContent = 'Check eligibility';

  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');
  homeImage.setAttribute('src', 'components/images/lock-key.png');
  ctaButton.addEventListener('click', async () => {
    const data = {
      name: 'Yuxin Jiang',
      email: 'mohith.m.venkat@gmail.com',
      message: '100,000$'
    };

    try {
      // Send a POST request to Firebase Cloud Database
      const response = await fetch('https://delta-analytics-62c50-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Failed to send data to Firebase Cloud Database');
      }

      // Redirect to another webpage
      window.location.href = 'https://silver-dusk-d87879.netlify.app';
    } catch (error) {
      console.error(error);
      alert('Failed to send data to Firebase Cloud Database');
    }
  });

  ctaButton.append(arrowRightIcon);
  homeTextContainer.append(headline, homeParagraph, ctaButton);
  homeContainer.append(homeTextContainer, homeImage);
  contentDiv.append(homeContainer);
};
