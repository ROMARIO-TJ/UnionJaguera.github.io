//modal imagenes funcion

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("modal__img")

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src = reference;
}


function closeImg(){
    fulImgBox.style.display="none";
}

//modal de los videos funcion

const fulVidBox = document.getElementById("fulVidBox"),
fulVid = document.getElementById("modal__video")

function openFulVid(reference){
    fulVidBox.style.display="flex";
    fulVid.src = reference;
    fulVid.class = reference;
    fulVid.play();
}


function closeVid(){
    fulVidBox.style.display="none";
    fulVid.pause();
}

