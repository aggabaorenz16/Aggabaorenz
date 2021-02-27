const iconbars = document.querySelector('#iconbars');
const icons = document.querySelector('#icons');
const menu = document.querySelector('.menu-container');

iconbars.addEventListener('click', () => {
  if (icons.classList.contains('fa-bars'))
  {
    /* Icon */
    icons.classList.remove('fa-bars')
    icons.classList.add('fa-close')
    /* Menu */
    menu.classList.add('show')
    menu.classList.remove('hide')
  } else {
    /* Icon */
    icons.classList.add('fa-bars')
    icons.classList.remove('fa-close')
    /* Menu */
    menu.classList.remove('show')
    menu.classList.add('hide')
  }
}
)
