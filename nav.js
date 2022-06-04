function toggle_nav(){
    if (document.getElementById("nav-mobile").style.display == "none"){
        document.getElementById("nav-mobile").style.display = "block";
    } else {
        document.getElementById("nav-mobile").style.display = "none";
    }
}

document.getElementById("nav-img").onclick = toggle_nav;