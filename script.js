
window.onscroll = function() {
    myFunction()
}

const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

let navTop = $("#navTop");
let sticky = navTop.offsetTop;


function myFunction() {
    if(window.pageYOffset >= sticky) {
        navTop.classList.add("sticky");
    } else {
        navTop.classList.remove("sticky");
    }
}

let icon = $(".icon");

icon.onclick = function() {
    let navbar = $("#navbar");
    
    if(navbar.className === "nav-list") {
        navbar.className += " reponsive";
    } else {
        navbar.className = "nav-list";
    }
}

// Slides Imge

let slides = $$("#slide-list li");

let slideIndex = 0;

showSlide();

function showSlide() {
    slides.forEach(function(current, index){
        current.style.display = 'none';
    })

    slideIndex++;
    if(slideIndex > slides.length){slideIndex = 1};
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlide, 3000);
}


