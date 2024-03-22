hambergerButton = document.querySelector(".hambergerButton");


hambergerDiv = document.querySelector(".header-icon");

mobileNav = document.querySelector(".mobile-nav");
desktopNav = document.querySelector(".header2");
console.log(mobileNav.innerHTML)


function hambergerFunction(){
    if(mobileNav.innerHTML!== ""){
        mobileNav.innerHTML= "";
    } else{
        mobileNav.innerHTML=hambergerDiv.innerHTML && "" ;
    }

}