webcam.attach({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");

webcam.attach('#camera');


function take_snapshot() 
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('teachablemachine.withgoogle.com/models/_OgwdwMBF/model.json+',modelLoaded);