function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("lip x ="+ results[0].pose.lip.x);
        console.log("lip y ="+ results[0].pose.lip.y);
    }
}

function draw() {
    Image(video, 0, 0, 300, 300);
}

function take_snapshoot() {
    save('myLipstickFilterImage.png');
}