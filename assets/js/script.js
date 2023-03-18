// Twemoji
const emo = () => {
    twemoji.parse(document.body, {
        folder: "svg", 
        ext: ".svg"
    });
}
window.addEventListener('load', emo);



// Element reveal animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}



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



// Button: Back to top
const toTop = () => {
    document.documentElement.scrollTop = 0;
}