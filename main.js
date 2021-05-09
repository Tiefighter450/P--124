function preload() {

}
function setup() {
    canvas = createCanvas(597, 498);
    video = createCapture(VIDEO);
    video.size(301, 228);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("Model is initialized!");
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}
function draw() {
    canvas.center();
    video.center();
}