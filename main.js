Webcam.set({
    width: 305,
    height: 310,
    image_format: 'png',
    png_quality: 100,

});
Webcam.attach("#webcam")
function captureimg(){
    Webcam.snap(function(snapimg){
        document.getElementById("snap").innerHTML = "<img id='pic' src=" + snapimg + ">"
    })
}
console.log("ml5 version",ml5.version);
AIml = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xo77Zzicx/model.json", modelloaded);
function modelloaded(){
    console.log("Model is Loaded!!");
}
function identify(){
    image = document.getElementById("pic");
    AIml.classify(image, gotresult);
}
function gotresult(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("pre").innerHTML = result[0].label;
        speak = "";
        if (result[0].label == "Punch"){
        document.getElementById("emo").innerHTML = "👊";
        speak = "Punch";
        }
        if (result[0].label == "Thumbs Up"){
            document.getElementById("emo").innerHTML = "👍";
            speak = "Thumbs Up";
            
        }
        if (result[0].label == "Thumbs Down"){
            document.getElementById("emo").innerHTML = "👎";
            speak = "Thumbs Down";
            
        }
        if (result[0].label == "Amazing"){
            document.getElementById("emo").innerHTML = "👌";
            speak = "Amazing";
        }
        speak1();
    }
}
function speak1(){
    speaker = window.speechSynthesis;
    Utter = new SpeechSynthesisUtterance(speak);
    speaker.speak(Utter);
}
