(function () {

  var DEFAULT_SIZE = 120;

  var body = document.getElementsByTagName('body')[0];
  var size = DEFAULT_SIZE;

  setInterval(function () {
    body.style['background-size'] = size + 'px';
    if (size <= 1) {
      size = DEFAULT_SIZE; 
    } else {
      size--;
    }
  }, 200);
})();
