window.onload=function(){this.checkWidth()};
window.onscroll=function(){checkWidth()};
window.onresize=function(){checkWidth()};
function checkWidth(){
    if (window.innerWidth > 991){
        myFunction1();
    } else{
        myFunction2();
    }
}
navbar=document.getElementById("mainNavbar");
mainVar=document.getElementById("mainId");

function myFunction1(){
    var desktopHeight = document.getElementById("bannerCLS").height;
    desktopHeight += document.body.scrollHeight * 0.005;    
    if (window.pageYOffset > desktopHeight){
        navbar.classList.add("fixed-top");
        mainVar.classList.add("extraPadding");
    } else {
        navbar.classList.remove("fixed-top");
        mainVar.classList.remove("extraPadding");}
    }
var mobileHeight=0;
function myFunction2(){
    if (window.pageYOffset >= mobileHeight){
        navbar.classList.add("fixed-top");
        mainVar.classList.add("extraPadding");
    } else {
        navbar.classList.remove("fixed-top");
        mainVar.classList.remove("extraPadding");
    }
}