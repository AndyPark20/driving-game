var $varImage = document.querySelector('img');
var $carContainer = document.querySelector('.carStyle');


var myCar = {
  xCoordinate: 0,
  yCoordinate: 0,
  directions: '',
  motion: true
};

var intervalId = null;

document.addEventListener('keydown', function (e) {
  if (e.keyCode === 39) {
    myCar.directions = 'east';
  } else if (e.keyCode === 40) {
    myCar.directions = 'south';
  } else if (e.keyCode === 37) {
    myCar.directions = 'west';
  } else if (e.keyCode === 38) {
    myCar.directions = 'north';
  }
  $varImage.className =myCar.directions;

  if (e.keyCode === 32 && myCar.motion === true) {
    intervalId = setInterval(function () {
      myCar.xCoordinate +=15;
      myCar.yCoordinate +=0;
      $carContainer.style.left = myCar.xCoordinate + 'px';
      $carContainer.style.top = myCar.yCoordinate + 'px';
      myCar.motion = false;
    }, 16)
  } else if (e.keyCode === 32 && myCar.motion === false) {
    myCar.motion = true;
    clearInterval(intervalId);
  }
})
