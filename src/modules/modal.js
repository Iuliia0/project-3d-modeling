import { animate } from './helpers'

const modal = () => {
  const buttons = document.querySelectorAll('.popup-btn')
  const modal = document.querySelector('.popup')
  const modalBlock = document.querySelector('.popup-content')

  let offsetWidth

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
    
    modalBlock.style.top = '0'
    btn.addEventListener('click', () => {
      animate({
      duration: 1000,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        offsetWidth = document.documentElement.offsetWidth
        if (offsetWidth > 768) {
          modal.style.display = 'block'
          modalBlock.style.top = (20 * progress) +'%'
        } else if (offsetWidth <= 768) {
          modal.style.display = 'block'
          modalBlock.style.top = '200px'
          
        } 
      }
      })
    })

    })

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      animateClose()
    }
  })

  scrollUp()
}

export default modal