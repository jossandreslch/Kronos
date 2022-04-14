function mobileMenu(){
    if (document.getElementById("nav-bar-mobile").style.display == 'block') {
        document.getElementById("nav-bar-mobile").style.display = 'none';
    } else {
        document.getElementById("nav-bar-mobile").style.display="block";
    }
}

function activeOption(){
    var mobileMenu = document.getElementById("nav-bar-mobile");

    if(mobileMenu.style.display=='block'){
        var activeOp = document.getElementById("iconMenu");
        activeOp.style.color="#ff5328";
    }
    else{
        var activeOp = document.getElementById("iconMenu");
        activeOp.style.color="#fff";
    }
}