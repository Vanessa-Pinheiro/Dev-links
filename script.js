function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("Light")

    const img = document.querySelector("#profile img")

    if(html.classList.contains('Light')){
        img.setAttribute('src', './assets/profilelight.png')
    }
    else{
        img.setAttribute('src', './assets/profiledark.jpg')
    }

}