const validation = () => {
  const calcBlock = document.querySelector('.calc-block')
  const inputCalcBlock = calcBlock.querySelectorAll('input[type="text"]')
  const inputMessage = document.querySelector('input[name="user_message"]')

  const regText = /[^а-я \s \-]/gi
  const regMessage = /[^а-я0-9 \s\.\,\:\;\'\"\-]/gi
  const regEmail = /([^\@  \_ \. \! \~ \* \' \w \-]+)/gi
  const regTel = /([\+7|7|8])[(]?(\d{3})[)]?(\d{3})[-]?(\d{2})[-]?(\d{2})/g;
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
    tel.addEventListener('blur', (e) => {
      if(regTel.test(e.target.value)) {
        tel.value = e.target.value
      } else {
        tel.value = e.target.value.replace(/[а-яa-z \ё \Ё \@  \_ \. \! \~ \* \' \: \; \" \# \№ \^ \&]+/g, '').replace(/\++/g, '+').replace(/^\d\(\)\-\+/g, '').replace(/^[\-\s]+/gm, '').replace(/[\-\s]+$/gm, '')
      }
    })
  })

  inputMessage.addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(regMessage, '')
  })
}

export default validation