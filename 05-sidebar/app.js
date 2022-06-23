/*
    step1. In style.css hide sidebar by default
    -> sidebar class 
    -> transform: translate(-100%); 
    -> pushes sidebar left 100% of its own width
    -> it will disappear from page

    step2. In style.css to show sidebar set
    -> sidebar class 
    -> transform: translate(0); 
    -> go back to default position

    step3. toggle through classes through js
*/

// target sidebar-toggle , sidebar, close-btn class

const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

//add event listener

toggleBtn.addEventListener('click',function(){

    /* if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }
    else{
        sidebar.classList.add('show-sidebar');
     } */

    sidebar.classList.toggle("show-sidebar");

});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
  });
