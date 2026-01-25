const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');

  // Accessibility: Toggle the aria-expanded attribute
  const isOpen = hamButton.classList.contains('open');
  hamButton.setAttribute('aria-expanded', isOpen);
});