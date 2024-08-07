// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


// ANIMATIONS
let scrollAnimationElements = document.querySelectorAll('[data-san]');

let options = {
    rootMargin: '0px',
    threshold: .5
}

let scrollAnimationObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add class to entry
            entry.target.classList.add(entry.target.dataset.san)

            // Remove the data-san attribute after 3.5 second the animation occur 
            // Remove this line below if you dont wanna remove the data-san attribute
            setTimeout(() => {
                entry.target.removeAttribute('data-san')
            }, 2000)

            // Unobserve the entry to prevent infinite loop observing
            scrollAnimationObserver.unobserve(entry.target)
        }
    })
}, options)


scrollAnimationElements.forEach(scrollAnimationElement => {
    scrollAnimationObserver.observe(scrollAnimationElement)
})


// SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
