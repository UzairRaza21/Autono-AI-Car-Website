function scrolldown(){
   if(window.scrollY >= 100 ){
    navbar.classList.add("sticky")
   }
   else{
    navbar.classList.remove("sticky")
   }
}

function nav(){
   document.getElementById("navnew").classList.toggle("navbarshort")
}