// Pre-loader
const fade = () => {
    const wrapper = document.querySelector('.loader');
    wrapper.classList.add('fade');
}
window.addEventListener('load', fade);

// Set color scheme
const setTheme = () => {
    var theme = document.documentElement.getAttribute("data-theme");
    if(theme == "dark") theme = "light";
    else if(theme == "light") theme = "dark";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
}