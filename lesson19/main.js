const date = new Date()
const week = ['Понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']


const wrapper  = document.createElement('div')
const list = document.createElement('ul')
const li = document.createElement('li')
let item 


wrapper.className = 'wrapper'
document.body.append(wrapper)

list.className = 'list'
wrapper.append(list)

const addZero = (num) =>  {
  if (num < 10) {
    return num = '0' + num
  } else {
    return num
  }
}

const addItem = () => {
  item = document.createElement('li')
  item.className = 'item'
  list.append(item)
}

const writeGreeting = () => {
  addItem()
  let time = date.toLocaleTimeString('en')
  let hours = +date.toLocaleTimeString(['en'], {hour: '2-digit'}).split('').splice(0, 2).join('')

    if (time.includes('AM') && (hours >= 6 && hours <= 11)) {
    item.textContent = 'Доброе утро'
  } else if (time.includes('PM') && (hours < 6 || hours === 12)) {
    item.textContent = 'Добрый день'
  } else if (time.includes('PM') && (hours >= 6 && hours !== 12)) {
    item.textContent = 'Добрый вечер'
  } else if (time.includes('AM') && (hours < 6 || hours === 12)) {
    item.textContent = 'Доброй ночи'
  } 

}

const now = () => {
  for (let i = 0; i <= week.length-1; i++) {
  if (i === date.getDay()-1 ) {
    addItem()
    item.textContent = `Сегодня: ${week[i]}`
  }
  } 
  list.append(li)
}

const clock = () => {
    let text = 'Текущее время: '
    setInterval(() => {
    li.textContent = text + (new Date()).toLocaleTimeString('en');
}, 1000);
}

const calculateTime = (deadline) => {
  addItem()
  let newYear = new Date(deadline).getTime()
  let secondsBeforeNewYear = (newYear - new Date().getTime()) / 1000
  let daysBeforeNewYear = Math.floor(secondsBeforeNewYear / 60 / 60 / 24)
  item.textContent = `До нового года осталось ${daysBeforeNewYear} дней`
}


  writeGreeting()
  now()
  clock()
  calculateTime('1 january 2022')






