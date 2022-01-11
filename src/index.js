import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


timer('15 january 2022')
menu()
modal()
validation()
tabs()
slider({containerSlider: '.portfolio-content', itemSlider: '.portfolio-item', containerDot: '.portfolio-dots'})
calc(100)
sendForm({ 
  idForms: ['form1', 'form2', 'form3'],
  someElem: [
    {
      type: 'block',
      id: 'total'
    }
  ]})
