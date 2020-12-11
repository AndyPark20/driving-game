var $varImage = document.querySelector('img');
var $carContainer = document.querySelector('.carStyle');


var myCar ={
  xCoordinate:'',
  yCoordinate:'',
  directions:''
};

var intervalId=null;
var distanceX=0;
var distanceY=0;

document.addEventListener('keydown',function(e){
  clearInterval(intervalId);
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
  }if (e.keyCode ===32){
    intervalId=setInterval(function(){
      distanceX+=15;
      myCar.xCoordinate=distanceX;
      myCar.yCoordinate=distanceY;
      $carContainer.style.left = myCar.xCoordinate + 'px';
      $carContainer.style.top = myCar.yCoordinate + 'px';
    },16)
  }



})
