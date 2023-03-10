// Detect color scheme
// Order: Local Storage > OS theme
const detectColorScheme = () => {
    // Defaults as dark
    var theme = "dark";

    // ...if OS theme is light
    if(window.matchMedia("(prefers-color-scheme: light)").matches)
        var theme = "light";
    // ...if local storage is light
    if(localStorage.getItem("data-user-theme") == "light")
        var theme = "light";
    else
        var theme = "dark";

    document.documentElement.setAttribute("data-user-theme", theme);
}
detectColorScheme();



// Pre-loader
const fade = () => {
    const wrapper = document.querySelector('.preloader');
    wrapper.classList.add('fade-out');
    document.body.classList.remove('unscrollable');
}
window.addEventListener('load', fade);



// Navbar background color & FAB opacity
const getVH = () => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return vh;
}
window.onscroll = function(event) {
    var navbar = document.getElementById('main-navbar');
    var fabs = document.getElementById('main-fab');
    var scroll = window.scrollY;
    // L: 0.4, S: 0.05
    var navbarBreakpoint = 0.05 * getVH();
    var fabBreakpoint = 0.5 * getVH();
    if(scroll < navbarBreakpoint) {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('neumorphism');
    }
    else {
        navbar.style.backgroundColor = 'var(--navbar-color)';
        navbar.classList.add('neumorphism');
    }
    if(scroll < fabBreakpoint) {
        fabs.classList.remove('fade-in');
    }
    else {
        fabs.classList.add('fade-in');
    }
}