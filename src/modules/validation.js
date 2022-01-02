const validation = () => {
  const calcBlock = document.querySelector('.calc-block')
  const inputCalcBlock = calcBlock.querySelectorAll('input[type="text"]')

  const regText = /[^а-я \s \-]/gi
  const regEmail = /([^\@  \_ \. \! \~ \* \' \w \-]+)/gi
  const regTel = /[^0-9\( \) \-]/gi
  const regCalcBlock = /^[0-9]+/g

  inputCalcBlock.forEach(input => {
    input.type = ''
    input.addEventListener('input', (e) => {
      e.target.value = e.target.value.match(regCalcBlock, '')
    })
  })

  const textInputAll = document.querySelectorAll('input[type="text"]')
  const emailInputAll = document.querySelectorAll('input[type="email"]')
  const telInputAll = document.querySelectorAll('input[type="tel"]')

  textInputAll.forEach(text => {
    text.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(regText, '')
    })
  })

  emailInputAll.forEach(email => {
    email.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(regEmail, '')
    })
  })

  telInputAll.forEach(tel => {
    tel.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(regTel, '')
    })
  })
}

export default validation