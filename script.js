// Pre-loader
const fade = () => {
    const wrapper = 
    document.querySelector('.loader');
    wrapper.classList.add('fade');
};
window.addEventListener('load', fade);

// Navbar color transition
const handleScroll = () => {
    if(window.pageYOffset>0){
        if(this.view.topOfPage) this.view.topOfPage = false
      } else {
        if(!this.view.topOfPage) this.view.topOfPage = true
      }
}
window.addEventListener('scroll', this.handleScroll);

// Set color scheme
const setTheme = () => {
    var theme = document.documentElement.getAttribute("data-theme");
    if(theme == "dark") theme = "light";
    else if(theme == "light") theme = "dark";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("data-theme", theme);
}