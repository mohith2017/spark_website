export const loadFooter = () => {
  const footerContainer = document.querySelector('footer');

  const footerText = document.createElement('p');
  const devNameLink = document.createElement('a');
  const sourceCodeLink = document.createElement('a');
  const copyrightSpan = document.createElement('span');

  const dividerSymbol = '⸱';
  footerText.textContent = '';

  devNameLink.textContent = 'Dev Team @ Delta';
  devNameLink.setAttribute('href', 'https://github.com/mohith2017');
  devNameLink.setAttribute('target', '_blank');

  const year = new Date().getFullYear();
  copyrightSpan.textContent = `© ${year}`;

  sourceCodeLink.textContent = 'Source code';
  sourceCodeLink.setAttribute(
    'href',
    'https://github.com/mohith2017/spark_website'
  );
  sourceCodeLink.setAttribute('target', '_blank');

  footerText.append(
    'Made with ❤️ by',
    devNameLink,
    dividerSymbol,
    copyrightSpan,
    dividerSymbol,
    sourceCodeLink
  );
  footerContainer.append(footerText);
};
