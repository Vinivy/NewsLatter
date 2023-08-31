const Completo = document
  .querySelector('button')
  .addEventListener('click', () => {
    let verificar = document.querySelector('#Email')
    //area de Completa
    let Area = document.querySelector('main')
    if (verificar.value.length > 0) {
      let img = document.createElement('img')
      img.src = './assets/images/icon-success.svg'
      img.classList.add('success-image')
      Area.appendChild(img)

      //transparent os components
      let container = document.querySelector('#Container')
      let ilustration = document.querySelector('#Ilustration')
      container.style.display = 'none'
      ilustration.style.display = 'none'

      //deixar o main apropriado para a caixa de confirmação
      let main = document.querySelector('main')
      main.style.gridTemplateColumns = 'repeat(1,1fr)'
      main.style.gridGap = '2rem'
      main.style.width = '28vw'

      //adicionando o title
      let Title = document.createElement('h1')
      Title.classList.add('Thanks')
      Title.textContent = 'Thanks for subscribing!'
      Area.appendChild(Title)

      //adicionando texto
      let texto = document.createElement('p')
      texto.classList.add('TextSubs')
      texto.textContent = `A Confirmation email has been sent to ${verificar.value} please open it and click teh button inside to confirm your subscription`
      Area.appendChild(texto)

      // Adicionando button e sua Função
      let botao = document.createElement('button')
      botao.addEventListener('click', () => {
        alert('Obrigado por visitar meu projeto!, compartilhe com os amigos! ')
      })
      botao.classList.add('message')
      botao.textContent = 'Dismiss message'
      Area.appendChild(botao)
    } else {
      alert('Erro')
    }
  })
