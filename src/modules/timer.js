const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000 // получили секунды
    // let days = Math.floor(timeRemaining / 60 / 60 / 24)
    // let hours = Math.floor((timeRemaining / 60 / 60) % 24)
    let hours = Math.floor(timeRemaining / 60 / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return { timeRemaining, hours, minutes, seconds }
  }

  const addZero = (num) =>  {
  if (num < 10) {
    return num = '0' + num
  } else {
    return num
  }
}

  const updateClock = () => {
    let getTime = getTimeRemaining()
    if (getTime.timeRemaining > 0) {
      timerHours.textContent = addZero(getTime.hours)
      timerMinutes.textContent = addZero(getTime.minutes)
      timerSeconds.textContent = addZero(getTime.seconds)
    } else {
      timerHours.textContent = '00'
      timerMinutes.textContent = '00'
      timerSeconds.textContent = '00'
      clearInterval(timeId)
    }
  }
  
  let timeId = setInterval(updateClock, 1000)
  
}

export default timer

/*
setInterval(updateClock, 1000)
получили переменные
нужно задать время, до каких пор будет работать таймер
let dateStop = new Date(deadline).getTime() - получаем милли секунды, чтоы сделать расчёт сколько осталось до дедлайна
  let dateNow = new Date().getTime()
.getTime() - покажет миллисекунды

 let timeRemaining = dateStop - dateNow - получаем разность между датами

  // setInterval(getTimeRemaining, 1000, '1 january 2022')
// третий параметр необяхательный. отправится, как аргумет в вызываемую функцию.

    // return {
    //   hours: hours,
    //   minutes: minutes,
    //   seconds: seconds
    // } эту запись можно упростить и скрасить до: 

    return { hours, minutes, seconds }
  */
