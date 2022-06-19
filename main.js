function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);

    canvas=createCanvas(550, 550);
    canvas.position(560, 110);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#00FF00");
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}