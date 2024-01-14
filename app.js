let navBtn = document.getElementById("navBtn");
let mobileNav = document.getElementById("mobileNav");

navBtn.onclick = function() {
    if(mobileNav.classList.contains("active-nav")) {
        mobileNav.classList.remove("active-nav");
        navBtn
        .setAttribute('src', "images/icon-hamburger.svg")
    }

    else {
        mobileNav.classList.add("active-nav");
        navBtn
        .setAttribute('src', "images/icon-close.svg")
    }
}