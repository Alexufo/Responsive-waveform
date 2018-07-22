var height = 60;
var width = 858; // json.length*3

var json = JSON.parse('[25,30,34,37,37,38,34,46,43,37,35,30,33,35,30,33,31,32,29,35,28,34,30,31,32,33,32,33,33,29,34,33,38,31,31,30,32,34,30,32,31,31,34,34,28,36,30,37,31,32,30,37,32,39,34,35,32,35,36,33,32,32,36,32,32,31,30,30,29,41,31,32,38,30,37,30,31,30,32,34,37,25,35,33,24,21,30,20,26,30,25,24,16,27,29,25,24,47,35,33,32,33,32,32,33,30,32,30,26,32,30,41,28,31,25,27,30,28,27,21,34,29,35,34,35,35,32,28,30,33,33,32,32,32,32,29,34,34,34,32,31,33,37,32,32,28,29,27,32,36,27,36,33,39,30,32,39,40,29,28,28,37,25,24,23,23,25,24,24,24,23,25,30,29,26,37,18,8,11,15,11,11,11,12,11,12,18,16,13,13,13,11,16,10,30,29,31,37,37,37,31,30,31,33,26,31,30,31,29,33,34,30,26,25,31,30,34,37,34,38,35,30,29,29,37,32,34,31,35,36,30,40,37,34,35,31,30,35,32,30,31,35,34,36,34,40,38,33,34,31,30,34,31,31,30,33,33,33,33,28,30,35,32,35,32,34,28,30,21,24,31,16,17,22,20,20,27,24,26,12,20,22,25,18,29,59]');

function draw(json, width) {
  
  var c = document.getElementById("myCanvas"); 
  var ctx = c.getContext("2d");
  c.height = 60;
  c.width = width;
 // ctx.canvas.width = width; 

  json.forEach(function(item, i, arr) {

    ctx.fillStyle = "white";
    ctx.fillRect(i * 3, height, 2, item - height)
    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    // draw a small 

    if (item <= json[i+1]) {
      h2 = json[i+ 1];
    } else {
      h2 = item; 
    }

    ctx.fillRect(i * 3 + 2, height, 1, h2 - height);

  });
}
  
json2 = largestTriangleThreeBuckets(json, width);
draw(json2,width);
  
window.onresize = function() {
  var w = document.querySelector('.c-wrapper').clientWidth;
  if (w >= width) {
     w = width;
  }
  
  json2 = largestTriangleThreeBuckets(json, w/3);
  draw(json2,w);
}


