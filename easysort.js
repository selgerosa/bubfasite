function toggle(color) {
  // get lists
  var x = document.getElementsByClassName("all");
  var a = document.getElementsByClassName(color);

  var i; var j;
  for (j=0; j<y.length;j++) {
    y[j].classList.add('invisible');
  }

  for (i = 0; i < x.length; i++) {
    x[i].classList.toggle('invisible');
  }
}

function colorsort(color) {
  var x = document.getElementsByClassName("all");
  var i; var j; var k;

  for (j=0; j<x.length;j++) {
    x[j].classList.add('invisible');
    if (x[j].classList.contains(color)) {
      x[j].classList.remove('invisible');
    }
  }
}
