function swapTheme() {
    const html = document.getElementById("jesus")
    const icon = document.getElementById("iconHeader")
    if (html.getAttribute("data-bs-theme") == "dark")
        html.setAttribute("data-bs-theme", "light");
    else
    html.setAttribute("data-bs-theme", "dark");
    // if (icon.getAttribute("src") == "./src/SICON.png")
    //     icon.setAttribute("src","./src/SICONB.png")
    // else
    //     icon.setAttribute("src","./src/SICON.png")
}