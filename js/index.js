function onMouse() {
  var left = $(this).position().left;
  var width = $(this).width();
  $("#line1").width(left + width);
  $("#line2").width(940 - left);
}

function offMouse() {
  $("#line1").width(0);
  $("#line2").width(0);
}
(function() {
  $('ul li').hover(onMouse, offMouse);
})();