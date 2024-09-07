
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible)
            // {
            reveals[i].classList.add("active");
    
        else {
            reveals[i].classList.remove("active");
        }
    }
    var navbar = document.getElementById("navbar1");
    var logo = document.getElementById("logo");
    var logo = document.getElementById("logo");

    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        var element1 = document.getElementById("navbar1");
        var element = document.getElementById("navbar");
        var logo = document.getElementById("logo");
        navbar.classList.add("sticky-menu");
        navbar.classList.add("bgmain");
        navbar.classList.remove("py-3");
        document.getElementById("logotext").classList.remove('textmaincolor');




    } else {
        navbar.classList.remove("sticky-menu");
        navbar.classList.remove("bgmain");
        navbar.classList.add("py-3");




        // var element1 = document.getElementById("navbar1");
        // var element = document.getElementById("navbar");
        // var logo = document.getElementById("logo");

        // element.classList.remove("p-2");
        // element.classList.add("p-4");
        // logo.classList.remove("sticky-logo");
        // logo.classList.add("original-logo");

    }
}

window.addEventListener("scroll", reveal);