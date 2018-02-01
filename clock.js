var drawing=document.getElementById("drawing");
var ctx=drawing.getContext("2d");
var width=drawing.width;
var height=drawing.height;
ctx.translate(width/2,height/2);
var radius=width/2;
var hours=[3,4,5,6,7,8,9,10,11,12,1,2];

update();
setInterval(update,1000);

function drawRound(){
/*
	ctx.beginPath();
	ctx.lineWidth=4/200*width;
	ctx.arc(0,0,radius-5/200*width,0,2*Math.PI,false);
	ctx.strokeStyle="pink";
	ctx.stroke();
	ctx.closePath();
*/
	for(let i=0;i<hours.length;i++){
		var num=hours[i];
		ctx.font=12/200*width+"px "+"Arial";
		ctx.textAlign="center";
		ctx.textBaseline="middle";
		ctx.fillStyle="black";
		let x=(radius-25/200*width)*Math.cos(Math.PI/6*i);
		let y=(radius-25/200*width)*Math.sin(Math.PI/6*i);
		ctx.fillText(num,x,y);
	}
	for(let i=0;i<60;i++){
		ctx.beginPath();
		ctx.lineWidth=1;
		if(i%5===0){
			ctx.fillStyle="black";
		}else{
			ctx.fillStyle="#ccc";
		}
		let x=(radius-15/200*width)*Math.cos(Math.PI/30*i);
		let y=(radius-15/200*width)*Math.sin(Math.PI/30*i);
		ctx.arc(x,y,2/200*width,0,2*Math.PI,false);
		ctx.fill();
	}
}
function hourHand(hour,minute){
	ctx.beginPath();
	ctx.lineWidth=5/200*width;
	ctx.moveTo(0,0);
	var x=(radius-50/200*width)*Math.cos(Math.PI/6*(hour+1/60*minute-3));
	var y=(radius-50/200*width)*Math.sin(Math.PI/6*(hour+1/60*minute-3));
	ctx.lineTo(x,y);
	ctx.strokeStyle="black";
	ctx.stroke();
}
function minuteHand(minu,second){
	ctx.beginPath();
	ctx.lineWidth=3/200*width;
	ctx.moveTo(0,0);
	var x=(radius-40/200*width)*Math.cos(Math.PI/30*(minu-15+1/60*second));
	var y=(radius-40/200*width)*Math.sin(Math.PI/30*(minu-15+1/60*second));
	ctx.lineTo(x,y);
	ctx.strokeStyle="black";
	ctx.stroke();
}
function secondHand(sec){
	ctx.beginPath();
	ctx.lineWidth=2/200*width;
	var x0=-(radius-80/200*width)*Math.cos(Math.PI/30*(sec-15));
	var y0=-(radius-80/200*width)*Math.sin(Math.PI/30*(sec-15));
	var x1=(radius-35/200*width)*Math.cos(Math.PI/30*(sec-15));
	var y1=(radius-35/200*width)*Math.sin(Math.PI/30*(sec-15));
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1,y1);
	ctx.strokeStyle="red";
	ctx.stroke();
}
function barDraw(){
	ctx.beginPath();
	ctx.lineWidth=1;
	ctx.arc(0,0,5/200*width,0,2*Math.PI,false);
	ctx.fillStyle="black";
	ctx.fill();
}
function update(){
	var now=new Date();
	var hour=now.getHours();
	var minute=now.getMinutes();
	var second=now.getSeconds();
	ctx.clearRect(-1/2*width,-1/2*width,width,width);
	hourHand(hour,minute);
	minuteHand(minute,second);
	secondHand(second);
	drawRound();
	barDraw();
}