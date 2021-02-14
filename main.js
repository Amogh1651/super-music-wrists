song = "";

var song;
var button;


rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
function preload()
{
song = loadSound("harry_potter_theme.mp3");
song2 = loadSound("iphone_11_pro.mp3");
}


function setup()
{
canvas = createCanvas(600, 500);


song.setVolume(0.3);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
console.log("PoseNet has successfully been initiaized"); 
}
function togglePlaying()
{
if (!song.isPlaying()) {
song.play();
song.setVolume();
button.html("pause")
} else {
song.pause();
button.html("play");    
}
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY =" + rightWristY);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY =" + leftWristY);
}
}




function draw()
{
image(video,0,0, 600, 500);
fill("red");
stroke("yellow");
circle(leftWristX, leftWristY, 20);
circle(rightWristX, rightWristY, 20);
}

function play()
{
song.play();
song.setVolume(1); 
song.rate(1);
}