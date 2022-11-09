const crewNav1 = document.getElementById("nav-c1");
const crewNav2 = document.getElementById("nav-c2");
const crewNav3 = document.getElementById("nav-c3");
const crewNav4 = document.getElementById("nav-c4");

const crewPosition = document.querySelector(".crew-heading");
const crewName = document.querySelector(".crew-name");
const crewDesc = document.querySelector(".body-text");
const crewImage = document.querySelector("#crew-img");




window.addEventListener('load',crewFunc);
function crewFunc(){
    crewNav1.classList.add("crew-nav-btns");
    crewNav1.onclick = function(){
        crewImage.src = "assets/crew/image-douglas-hurley.webp";
        crewPosition.innerHTML = "COMMANDER";
        crewName.innerHTML = "DOUGLAS HURLEY";
        crewDesc.innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
        crewNav1.classList.add("crew-nav-btns-active");
        crewNav2.classList.remove("crew-nav-btns-active");
        crewNav3.classList.remove("crew-nav-btns-active");
        crewNav4.classList.remove("crew-nav-btns-active");
    }
    crewNav2.onclick = function(){
        crewImage.src = "assets/crew/image-mark-shuttleworth.webp";
        crewPosition.innerHTML = "MISSION SPECIALIST";
        crewName.innerHTML = "MARK SHUTTLEWORTH";
        crewDesc.innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
        crewNav1.classList.remove("crew-nav-btns-active");
        crewNav2.classList.add("crew-nav-btns-active");
        crewNav3.classList.remove("crew-nav-btns-active");
        crewNav4.classList.remove("crew-nav-btns-active");
    }
    crewNav3.onclick = function(){
        crewImage.src = "assets/crew/image-victor-glover.webp";
        crewPosition.innerHTML = "PILOT";
        crewName.innerHTML = "VICTOR GLOVER";
        crewDesc.innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
        crewNav1.classList.remove("crew-nav-btns-active");
        crewNav2.classList.remove("crew-nav-btns-active");
        crewNav3.classList.add("crew-nav-btns-active");
        crewNav4.classList.remove("crew-nav-btns-active");
    }
    crewNav4.onclick = function(){
        crewImage.src = "assets/crew/image-anousheh-ansari.webp";
        crewPosition.innerHTML = "FLIGHT ENGINEER";
        crewName.innerHTML = "ANOUSHEH ANSARI";
        crewDesc.innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";
        crewNav1.classList.remove("crew-nav-btns-active");
        crewNav2.classList.remove("crew-nav-btns-active");
        crewNav3.classList.remove("crew-nav-btns-active");
        crewNav4.classList.add("crew-nav-btns-active");
    }
}
