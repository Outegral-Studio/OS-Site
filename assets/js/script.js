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



// Button: Back to top
const toTop = () => {
    document.documentElement.scrollTop = 0;
}