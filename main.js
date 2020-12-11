$varImage = document.querySelector('img');

var myCar ={
  directions:''
};

document.addEventListener('keydown',function(e){

  if(e.keyCode ===39){
    myCar.directions='east';
  }else if(e.keyCode === 40){
    myCar.directions ='south';
  }else if (e.keyCode ===37){
    myCar.directions ='west';
  }else if (e.keyCode ===38){
    myCar.directions= 'north';
  }

})
