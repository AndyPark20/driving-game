$varImage = document.querySelector('img');

var myCar ={
  x-coordinate:'',
  y-coordinate:'',
  directions:''
};

var intervalId=null;

document.addEventListener('keydown',function(e){
  $varImage.className ='';
  if(e.keyCode ===39){
    myCar.directions='east';
    $varImage.classList.add(myCar.directions);
  }else if(e.keyCode === 40){
    myCar.directions ='south';
    $varImage.classList.add(myCar.directions);
  }else if (e.keyCode ===37){
    myCar.directions ='west';
    $varImage.classList.add(myCar.directions);
  }else if (e.keyCode ===38){
    myCar.directions= 'north';
    $varImage.classList.add(myCar.directions)
  }



})
