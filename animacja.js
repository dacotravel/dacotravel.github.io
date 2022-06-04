function x() {
    c = document.getElementsByTagName("img");
    for (let i = 0; i < c.length; i++) {
        if (c[i].getBoundingClientRect().top < window.innerHeight * 0.85){
            c[i].style.opacity = "1";
        }else{
            c[i].style.opacity = "0";
        }
    }
    setTimeout(x,10);
}

x();