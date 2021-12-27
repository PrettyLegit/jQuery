$("h1").addClass("big-title");

$("h1").text("bruh");

$("a").attr("href", "https://www.youtube.com/watch?v=iik25wqIuFo");

$("button").click(function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});
