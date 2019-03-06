(function(){
    const selected = document.getElementsByClassName('label__selected')[0];
    const formOrder = document.getElementsByClassName('form__order')[0];
    const sectionOrder = document.getElementsByClassName('section--order')[0];
    const sectionOrderImg = sectionOrder.getElementsByTagName('img')[0];
    const price = formOrder.getElementsByTagName('p')[0].getElementsByTagName('span')[0];
    const select = selected.getElementsByTagName('select')[0];
    const options = selected.getElementsByTagName('option');
    const num = document.getElementsByClassName('label__num')[0];
    const numInput = num.getElementsByTagName('input')[0];
    const numPlus = num.getElementsByClassName('plus')[0];
    const numMinus = num.getElementsByClassName('minus')[0];
    let i = 1;
    let selectOption;

    numPlus.addEventListener('click', function(){
      numInput.setAttribute('value' , i += 1)
      searchSelected('data-price')
    })

    numMinus.addEventListener('click', function(){
      if(i > 1){
        numInput.setAttribute('value' , i -= 1)
        searchSelected('data-price')
      }
    })

    select.addEventListener('change', function(){
      searchSelected('data-price')
      for(let i = 0, max = options.length; i < max; i += 1 ){
        if(options[i].selected){
          if(options[i].innerHTML === 'Березовые дрова'){
            sectionOrderImg.src = 'images/drova-1.jpg'
          }
          else if(options[i].innerHTML === 'Осиновые дрова'){
            sectionOrderImg.src = 'images/drova-2.jpg'
          }
          else if(options[i].innerHTML === 'Дрова из ольхи'){
            sectionOrderImg.src = 'images/drova-3.jpg'
          }
        }
      }
    })

     function searchSelected(atrib){
       for(let i = 0, max = options.length; i < max; i += 1 ){
         if(options[i].selected){
           selectOption = options[i].getAttribute(atrib);
           price.innerHTML = selectOption *= numInput.getAttribute('value')
         }
       }
     }




}());
