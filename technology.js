
const techBtn1 = document.getElementById("number1");
const techBtn2 = document.getElementById("number2");
const techBtn3 = document.getElementById("number3");


const techImage = document.getElementById("tech-img");
const techName = document.getElementById("tech-name");
const techDesc = document.getElementById("body-text");

const sWidth = window.innerWidth;

techBtn1.classList.add("tech-nav-btns-active");

techBtn1.addEventListener('click', changeImg1);
function changeImg1(){
    if (sWidth >= 1280){
        body.style.backgroundImage = "url(assets/technology/background-technology-desktop.jpg)";
    }
    else if (sWidth >= 768){
        techImage.style.backgroundImage = "url(assets/technology/background-technology-tablet.jpg)";
    }
    else if (sWidth >= 375){
        techImage.style.backgroundImage = "url(assets/technology/background-technology-mobile.jpg)";
    }
    techImage.src="assets/technology/image-launch-vehicle-portrait.jpg";
    techName.innerHTML = "LAUNCH VEHICLE";
    techDesc.innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    techBtn1.classList.add("tech-nav-btns-active");
    techBtn2.classList.remove("tech-nav-btns-active");
    techBtn3.classList.remove("tech-nav-btns-active");
}

techBtn2.addEventListener('click', changeImg2);
function changeImg2(){
    if (sWidth >= 1280){
        body.style.backgroundImage = "url(assets/technology/background-technology-desktop.jpg)";
    }
    else if (sWidth  >= 768){
        body.style.backgroundImage = "url(assets/technology/background-technology-tablet.jpg)";
    }
    else if (sWidth  >= 375){
        body.style.backgroundImage = "url(assets/technology/background-technology-mobile.jpg)";
    }
    techImage.src="assets/technology/image-spaceport-portrait.jpg";
    techName.innerHTML = "SPACEPORT";
    techDesc.innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    techBtn1.classList.remove("tech-nav-btns-active");
    techBtn2.classList.add("tech-nav-btns-active");
    techBtn3.classList.remove("tech-nav-btns-active");
}

techBtn3.addEventListener('click', changeImg3);
function changeImg3(){
    if (sWidth  >= 1280){
        body.style.backgroundImage="url(assets/technology/background-technology-desktop.jpg)"
    }
    else if (sWidth  >= 768){
        body.style.backgroundImage = "url(assets/technology/background-technology-tablet.jpg)";
    }
    else if (sWidth  >= 375){
        body.style.backgroundImage = "url(assets/technology/image-space-capsule-mobile.jpg)";
    }
    techImage.src="assets/technology/image-space-capsule-portrait.jpg";
    techName.innerHTML = "SPACE CAPSULE";
    techDesc.innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    techBtn1.classList.remove("tech-nav-btns-active");
    techBtn2.classList.remove("tech-nav-btns-active");
    techBtn3.classList.add("tech-nav-btns-active");
}