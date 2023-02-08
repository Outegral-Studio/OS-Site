// Detect color scheme
// Order: Local Storage > OS theme
const detectColorScheme = () => {
    // Defaults as dark
    var theme = "dark";

    // ...if OS theme is light
    if(window.matchMedia("(prefers-color-scheme: light)").matches)
        var theme = "light";
    // ...if local storage is light
    if(localStorage.getItem("data-theme") == "light")
        var theme = "light";
    else
        var theme = "dark";

    document.documentElement.setAttribute("data-theme", theme);
}
detectColorScheme();

// Pre-loader
const fade = () => {
    const wrapper = document.querySelector('.loader');
    wrapper.classList.add('fade');
}
window.addEventListener('load', fade);

// Button: Toggle color scheme
const toggleTheme = () => {
    var theme = document.documentElement.getAttribute("data-theme");
    if(theme == "dark") theme = "light";
    else if(theme == "light") theme = "dark";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
}