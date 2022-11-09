const marsBtn = document.querySelector("#mars-btn");
const moonBtn = document.querySelector("#moon-btn");
const europaBtn = document.querySelector("#europa-btn");
const titanBtn = document.querySelector("#titan-btn");
const img = document.getElementById("moonimage");
const destinationText = document.querySelector(".destination-text");
const avgDistance = document.querySelector(".avg-distance");
const moonName =document.querySelector(".mars");
const planet = document.getElementById("planet");
const moonDesc = document.querySelector(".destination-text");
const moonDistance = document.getElementById("distance");
const estTravel = document.getElementById("travel-time");


function desFunc(){
    moonBtn.addEventListener('click', () =>{
        planet.src = "assets/destination/image-moon.webp";
        moonName.innerHTML = "MOON";
        moonDesc.innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
        moonDistance.innerHTML = "384,400 km";
        estTravel.innerHTML = "3 DAYS";
        moonBtn.classList.add("navbar2-active");
        marsBtn.classList.remove("mars-btn");
        europaBtn.classList.remove("navbar2-active");
        titanBtn.classList.remove("navbar2-active");
    
    })
    marsBtn.addEventListener('click', () => {
        planet.src="assets/destination/image-mars.webp";
        moonName.innerHTML = "MARS";
        moonDesc.innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
        moonDistance.innerHTML = "225 MIL. km";
        estTravel.innerHTML = "9 MONTHS";
        moonBtn.classList.remove("navbar2-active");
        moonBtn.classList.remove("mars-btn");
        marsBtn.classList.add("navbar2-active");
        europaBtn.classList.remove("navbar2-active");
        titanBtn.classList.remove("navbar2-active");
    })
    europaBtn.addEventListener('click', () =>{
        planet.src="assets/destination/image-europa.webp";
        moonName.innerHTML = "EUROPA";
        moonDesc.innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
        moonDistance.innerHTML = "628 MIL. km";
        estTravel.innerHTML = "3 YEARS";
        moonBtn.classList.remove("navbar2-active");
        moonBtn.classList.remove("mars-btn");
        marsBtn.classList.remove("navbar2-active");
        europaBtn.classList.add("navbar2-active");
        titanBtn.classList.remove("navbar2-active");
    })
    titanBtn.addEventListener('click', () =>{
        planet.src="assets/destination/image-titan.webp";
        moonName.innerHTML = "TITAN";
        moonDesc.innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
        moonDistance.innerHTML = "1.6 BIL. km";
        estTravel.innerHTML = "7 YEARS";
        moonBtn.classList.remove("navbar2-active");
        moonBtn.classList.remove("mars-btn");
        marsBtn.classList.remove("navbar2-active");
        europaBtn.classList.remove("navbar2-active");
        titanBtn.classList.add("navbar2-active");
    })
}


const hamburger = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("main-navbar");
let menuOn = false;
hamburger.addEventListener("click", function(){
    menuOn = !menuOn;
    if(menuOn){
        hamburger.src = "icon-close.svg";
    }else{
        hamburger.src = "icon-hamburger.svg";
    }
    navMenu.classList.toggle("active");
})
navLink.forEach((item) => {
     item.addEventListener("click", function(){
        menuOn = !menuOn;
        if(menuOn){
            hamburger.src = "icon-close.svg";
        }else{
            hamburger.src = "icon-hamburger.svg";
        }
       navMenu.classList.remove("active");
     })
});

