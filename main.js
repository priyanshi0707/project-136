function setup(){
    canvas= createCanvas;
    canvas.center();
    
}
function start(){
    objectDetector=ml5.objectDetector('cocssd',modelLoaded);
    document.getElementById("status").innerHTML="status:DETECTING OBJECTS";
    
}
function modelLoaded(){
    console.log("Model Loaded!!");
    status=true;
}
function draw(){
}