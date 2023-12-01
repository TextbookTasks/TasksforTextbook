let gallery_pics = [1, 2, 3, 4, 5, 6];
let width;
let height;
let pic_id = gallery_pics[Math.floor(Math.random()*gallery_pics.length)];
var pictures = {
    "first": "GalleryPics/Cassete.jpg",
    "second": "GalleryPics/colleco.jpg",
    "third": "GalleryPics/Magnavox.jpg",
    "fourth": "GalleryPics/MasterSystem.jpg",
    "fifth": "GalleryPics/NES.jpg",
    "sixth": "GalleryPics/PC_Engine.jpg"
};

window.addEventListener("load", activatePic(pic_id));
function activatePic(pic){
    console.log(pic);

    switch (pic){
        case 1:
            first.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["first"];
            break;
        case 2:
            second.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["second"];
            break;
        case 3:
            third.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["third"];
            break;
        case 4:
            fourth.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["fourth"];
            break;
        case 5:
            fifth.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["fifth"];
            break;
        case 6:
            sixth.style.backgroundColor = "#FFFFFF";
            previewPic.src = pictures["sixth"];
            break;  
    }

    
}

function clearDots(){
    var elements = document.getElementsByClassName("preview");
    for(i = 0; i < gallery_pics.length; i++){
        elements[i].style.background = 'none';
    }
}

function showNext(){
    pic_id++;
    if(pic_id > 6){
        pic_id = 1
    }
    clearDots();
    activatePic(pic_id);
}

function showPrev(){
    pic_id--;
    if(pic_id < 1){
        pic_id = 6
    }
    clearDots();
    activatePic(pic_id);
}

window.onresize = window.onload = function(){
    width = this.screen.width;
    height = this.screen.height;
    console.log(width, height);
    if(width === 1920 && height === 1080){
        links.style.top = "70%";
        desc.style.top = "59%";
        prevs.style.top = "50%";
        console.log(links.style.top, desc.style.top, prevs.style.top);
    }
    else if(width === 1280 && (height == 720 || height == 800)){
        links.style.top = "85%";
        desc.style.top = "74%";
        prevs.style.top = "68%";
        console.log(links.style.top, desc.style.top, prevs.style.top);
    }
}
