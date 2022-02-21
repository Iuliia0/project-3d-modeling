const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours')
  const timerMinutes = document.getElementById('timer-minutes')
  const timerSeconds = document.getElementById('timer-seconds')
  let timeId
console.log('timer')
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000 
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
  updateClock()
  timeId = setInterval(updateClock, 1000)
  
}

export default timer

