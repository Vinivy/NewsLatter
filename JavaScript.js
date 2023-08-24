const Completo = document
  .querySelector('button')
  .addEventListener('click', () => {
    let verificar = document.querySelector('#Email')
    if (verificar.value.length > 0) {
      alert('Ok')
    } else {
      alert('Erro')
    }
  })
