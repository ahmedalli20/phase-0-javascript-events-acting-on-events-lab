// Your code here
var dodger = document.getElementById('dodger');
      
dodger.style.backgroundColor = "#ff69b4";


      
function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10);
  
    if ( left < 360) {
      dodger.style.left = `${left + 4}px`;
    }
  }
        
  docum    
moveDodgerLeft();
moveDodgerRight();
