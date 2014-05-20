var queryWidth = function (obj) {
  console.log(this.offset().left);
}

$('ul li').hover(onMouse, offMouse);

function onMouse() {
  var width = $(this).position().left;
  console.log("line:" + $(this).position().left);
  $("#line1").width(width);
  $("#line2").width(width + $(this).width());
}

function offMouse() {
  $("#line1").width(0);
  $("#line2").width(0);
}
