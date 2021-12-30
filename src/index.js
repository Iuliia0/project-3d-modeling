import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import validation from './modules/validation'
import tabs from './modules/tabs'
import slider from './modules/slider'

timer('1 january 2022')
menu()
modal()
validation()
tabs()
slider({containerSlider: '.portfolio-content', itemSlider: '.portfolio-item', containerDot: '.portfolio-dots'})