var mustacheImg
mustacheX = 150;
mustacheY = 150;

function preload(){
    mustacheImg = loadImage("https://i.postimg.cc/XJTmp3xx/mustache-removebg-preview.png");
}
function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function modelLoaded(){
    console.log("PoseNet foi inicializado")
}

function gotPoses(results){
    if(results.length > 0){
        mustacheX = results[0].pose.nose.x - 15;
        mustacheY = results[0].pose.nose.y - 1;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustacheImg, mustacheX, mustacheY, 30, 30)
}
function takeSnapshot(){
    save('myFilterImage.png')
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}