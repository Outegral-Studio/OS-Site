// Navbar background color
const getVH = () => {
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    return vh;
}
window.onscroll = function(event) {
    var navbar = document.getElementById('main-navbar');
    var scroll = window.scrollY;
    // L: 0.4, S: 0.05
    var breakpoint = 0.05 * getVH();
    if(scroll < breakpoint) {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('neumorphism');
    }
    else {
        navbar.style.backgroundColor = 'var(--navbar-color)';
        navbar.classList.add('neumorphism');
    }
}



// Twemoji
const emo = () => {
    twemoji.parse(document.body, {
        folder: "svg", 
        ext: ".svg"
    });
}
window.addEventListener('load', emo);



// Button: Toggle color scheme
const toggleTheme = () => {
    var theme = document.documentElement.getAttribute("data-user-theme");
    if(theme == "dark") theme = "light";
    else if(theme == "light") theme = "dark";

    document.documentElement.setAttribute("data-user-theme", theme);
    localStorage.setItem("data-user-theme", theme);
}



// Button: Share
const share = () => {
    // TBD
}