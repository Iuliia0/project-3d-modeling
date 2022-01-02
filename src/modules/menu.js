const menu = () => {
  const menu = document.querySelector('menu')
  const body = document.querySelector('body')

  const handleMenu = () => {
    menu.classList.toggle('active-menu')
  }

  body.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-btn') || e.target.matches('ul>li>a') || e.target.matches('.menu>img')) {
      handleMenu()
    }
    if (menu.classList.contains('active-menu') && !e.target.closest('.active-menu') && !e.target.matches('.menu>img')) {
      handleMenu()
    }

  })
}
export default menu