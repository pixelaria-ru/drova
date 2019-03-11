function buttonsForOrder(){
  const buttonsOrder = document.getElementsByClassName('button');
  const formOrder = document.getElementById('form-order');
  const price = formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
  for(let i = 0, max = buttonsOrder.length; i < max; i += 1){
    buttonsOrder[i].onclick = function(e){
      e.preventDefault()
    }
    if(buttonsOrder[i].href){
        buttonsOrder[i].addEventListener('click', function(){
          formOrder.classList.add('fixed');
        })

    }else{

      buttonsOrder[i].addEventListener('click', function(){
        formOrder.classList.add('step-two')
        formOrder.querySelector('.form__order').prepend(formOrder.querySelector('img'))
        buttonsOrder[i].innerHTML = 'Завершить заказ'


      })
    }


  }

formOrder.querySelector('form').addEventListener('change',function(){
  if(buttonsOrder[1].innerHTML === 'Завершить заказ'){
    buttonsOrder[1].addEventListener('click', function(){
      const xhr = new XMLHttpRequest();
      let masBody = [];

      masBody[0] = encodeURIComponent(formOrder.querySelectorAll('input')[0].value);
      masBody[1] = encodeURIComponent(formOrder.querySelectorAll('input')[1].value);
      masBody[2] = encodeURIComponent(formOrder.querySelectorAll('input')[2].value);
      masBody[3] = encodeURIComponent(formOrder.querySelectorAll('select')[0].value);
      masBody[4] = encodeURIComponent(formOrder.querySelectorAll('input')[3].value);
      masBody[5] = price.innerHTML;

      let body = 'name=' + masBody[0] +'&tel=' + masBody[1] +'&email=' + masBody[2] +'&select=' + masBody[3] +'&num=' + masBody[4]+'&price=' + masBody[5];

      xhr.open('POST', 'send.php', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(body);
      xhr.onreadystatechange = function(){
        if(xhr.readystate = 4){
          console.log('succses')

          formOrder.classList.remove('fixed')
          formOrder.classList.remove('step-two')
          formOrder.appendChild(formOrder.querySelector('img'));
          buttonsOrder[1].innerHTML = 'Заказать';
        }
      }
    })
  }
})



  formOrder.addEventListener('click', function(e){
    let target = e.target;
    if(target.classList.contains('section--order') && target.classList.contains('fixed')){
      this.classList.remove('fixed')
      this.classList.remove('step-two')
      formOrder.appendChild(formOrder.querySelector('img'));
      buttonsOrder[1].innerHTML = 'Заказать';

    }
  })

}
