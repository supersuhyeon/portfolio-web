let landscape = window.matchMedia("(orientation: landscape)");

landscape.addEventListener("change", function(e) {
    if(e.matches) {
        if(window.innerWidth >= 1024 && window.innerWidth <= 1900){
            window.location.href = '/mini-web-project/index.html'
        }
    } 
})

window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 1024 && window.innerWidth <= 1900){
        window.location.href = '/mini-web-project/index.html'
    }
})