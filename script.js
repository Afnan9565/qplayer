let playbtn = document.getElementById("play");
var audio = new Audio("Final audio.mp3");
function play(){
    if (audio.paused){
        audio.play();
        playbtn.classList.remove('fa-play-circle');
        playbtn.classList.add('fa-pause-circle');
    }
    }
