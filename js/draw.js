var c = document.querySelector("#firstCanvas");
var ctx = c.getContext("2d");

var image = new Image();
image.src = "img/me.jpg";



ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.font = "36pt Impact";
ctx.lineWidth = 3;

image.onload = function() {
  console.log("loading image ..");
  ctx.drawImage(image, 0, 0, c.width, c.height);

  ctx.fillText("CANVAS MEMES!", 50, 50);
  ctx.strokeText("CANVAS MEMES!", 50, 50);
}