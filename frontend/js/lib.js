(function(){
    const video = document.getElementsByTagName('video')[0];
    video.playbackRate = 0.5
}());



(function(){
  const label = document.getElementsByClassName('label__selected')[0];
  const select = label.getElementsByTagName('select')[0];
  const icon = label.getElementsByClassName('icon')[0];


  select.addEventListener('click', function(e){
    icon.classList.toggle('active')
  })

}());




formOrder();
buttonsForOrder();
