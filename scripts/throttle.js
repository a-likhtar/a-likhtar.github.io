let messages = document.getElementById('messages');
messages.onscroll = throttle(callback, 1000);

function throttle (fn, wait) {
    var time = Date.now();
    
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
}

var colors = [
    'blue',
    'white',
    'red',
    'green',
    'brown',
    'purple'
  ];

let colorIndex = 0;

function callback() {
    var target = document.getElementById('testThrottle');
    
    target.textContent += ' .';
    target.style.backgroundColor = colors[colorIndex];
    
    if (colorIndex === colors.length) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
  }