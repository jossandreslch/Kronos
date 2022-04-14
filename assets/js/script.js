function mobileMenu(){
    if (document.getElementById("nav-bar-mobile").style.display == 'block') {
        document.getElementById("nav-bar-mobile").style.display = 'none';
    } else {
        document.getElementById("nav-bar-mobile").style.display="block";
    }
}

function closeMobileMenu(){
    document.getElementById("nav-bar-mobile").style.display="none";
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

/*

FUNCIONES QUE TRATARON DE OCULTAR EL NAVBAR MOBILE AL HACER CLICK FUERA DEL MISMO, REVISAR DESPUÉS:

function outToggle(){

    document.addEventListener('click', function(event) {

        var isClickInsideElement = document.getElementById("nav-bar-mobile").contains(event.target);

        if ((document.getElementById("nav-bar-mobile").style.display="block") && (!isClickInsideElement)){
            document.getElementById("nav-bar-mobile").style.display = 'none';
        } 
        
        else if ((document.getElementById("nav-bar-mobile").style.display="none") && (!isClickInsideElement)){
            document.getElementById("nav-bar-mobile").style.display = 'none';
        }
       
        else{
            document.getElementById("nav-bar-mobile").style.display = 'block';
        }
})
}

*/


/*
function toggleOutside(){

    document.addEventListener('click', function(event) {
        var isClickInsideElement = document.getElementById("iconMenu").contains(event.target);
        if (!isClickInsideElement) {
            document.getElementById("nav-bar-mobile").style.display = 'none';
        } else{
            document.getElementById("nav-bar-mobile").style.display = 'block';
        }
    })

}

    /*
    var mobileMenu = document.getElementById("nav-bar-mobile");

    if (mobileMenu.style.display=='block'){
        document.addEventListener('click', function(event) {
            var isClickInsideElement = mobileMenu.contains(event.target);
            if (!isClickInsideElement) {
                mobileMenu.style.display = 'none';
            } else{
                mobileMenu.style.display = 'block';
            }
        })
    }
    */