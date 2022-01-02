const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  const modalBlock = document.querySelector('.popup-content')

  let offsetWidth
  let open = true

  const animateOpen = () => {
    let idInterval = requestAnimationFrame(animateOpen)
    if (open) {
      modal.style.display = 'block'
      modalBlock.style.transform = 'translateY(100%)'
      offsetWidth = document.documentElement.offsetWidth
      open = false
    } else if (!open && offsetWidth <= 768) {
      modalBlock.style.transition = 'all 0s'
      modalBlock.style.transform = 'translateY(0)'
      cancelAnimationFrame(idInterval)
      open = true
    }  else  if (!open && offsetWidth > 768){
      modalBlock.style.transition = 'all 1s'
      modalBlock.style.transform = 'translateY(0)'
      cancelAnimationFrame(idInterval)
      open = true
    }
  }

  const animateClose = () => {
      modal.style.display = 'none'
  }

  // плавная прокрутка
  const scrollUp = () => {
    const links = document.querySelectorAll('a[href*="#"]')
    for (let link of links) {
      if (!link.classList.contains('close-btn')) {
        link.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = link.getAttribute('href').substr(1)
          if (blockID !== '') {
            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
          }
        })
      }

    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', animateOpen)
  })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      animateClose()
    }
  })

  scrollUp()
}

export default modal

