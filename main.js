canvas =document.getElementById("myCanvas");
ctx =canvas.getContext("2d");

var Mouse_Event="empty";
var Start_X,Start_Y;

var color="black";
var width=1;
var radius

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e) {
    Mouse_Event="mousedown";
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
}

canvas.addEventListener("mouseup",mymouseup);

function mymouseup(e) {
    Mouse_Event="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);

function mymouseleave(e) {
    Mouse_Event="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e) {
    current_X =e.clientX-canvas.offsetLeft;
    current_Y =e.clientY-canvas.offsetTop;

    if(Mouse_Event=="mousedown") {

        console.log("current position of x and y cooradinates= ");
        console.log("X= " +current_X +",Y= " +current_Y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(current_X,current_Y,radius,0,2 * Math.PI);
        ctx.stroke()
    }
}

function cleararea() {
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}