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
function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}
function getScrollYMax() {
    var limit = Math.max(document.body.scrollHeight, 
        document.body.offsetHeight, 
        document.documentElement.clientHeight, 
        document.documentElement.scrollHeight, 
        document.documentElement.offsetHeight) - window.innerHeight;
    return limit;
}

const navBG = () => {
    // L: 40%, S: 5%
    var navbar = document.getElementById('main-navbar');
    var navbarBreakpoint = vh(5);

    if(window.scrollY < navbarBreakpoint) {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('neumorphism');
    }
    else {
        navbar.style.backgroundColor = 'var(--navbar-color)';
        navbar.classList.add('neumorphism');
    }
}
const fabVis = () => {
    var fabs = document.getElementById('main-fab');
    var fabBreakpoint = vh(50);

    if(window.scrollY < fabBreakpoint || window.scrollY > (getScrollYMax() - vh(10))) {
        fabs.classList.remove('fade-in');
    }
    else {
        fabs.classList.add('fade-in');
    }
}

window.addEventListener('scroll', navBG);
window.addEventListener('scroll', fabVis);