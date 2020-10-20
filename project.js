progress {
    width: 30%;
  }
  elem.onclick = function() {
    animate({
      duration: 1000,
      timing: function(timeFraction) {
        return timeFraction;
      },
      draw: function(progress) {
        elem.style.width = progress * 100 + '%';
      }
    });
  };
