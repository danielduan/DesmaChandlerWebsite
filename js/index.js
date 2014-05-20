var queryWidth = function (obj) {
  console.log(this.offset().left);
}

$('ul li').hover(onMouse, offMouse);

function onMouse() {
  var width = $(this).offset().left - $(this).width();
  console.log("line:" + $(this).offset().left);
  console.log("width:" + $(this).width());
  $("#line1").width(width);
  $("#line2").width(975-width);
}

function offMouse() {
  $("#line1").width(0);
  $("#line2").width(0);
}
