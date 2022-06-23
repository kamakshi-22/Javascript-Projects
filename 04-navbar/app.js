/*
    step 1. need to know height of the links
    -> click inspect -> select < class="link" 
    -> computed 
    -> height = 160px = 10 rem
    step2. add css
    //by default hide links
        .links {
            height: 0;
            overflow: hidden; // hides the links
            transition: var(--transition); //to make the height change from 0 10 10rems 
        }
    //toggle class
        .show-links {
            height: 10rem;
        }
    step3. target button to show the show-links class

/* target nav-toggle & links */
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

//add event listener

navToggle.addEventListener('click',function(){
    /* classList - shows/gets all classes of the element
    contains - checks classList for specific class
    console.log(links.classList.contains('links')); -> returns true

    if(links.classList.contains('show-links')){
        // remove - removes class
        links.classList.remove('show-links')
    }
    else{
        // add - adds class
        links.classList.add("show-links");
    }
    */

    // do it in one line with toggle - toggles class
    links.classList.toggle("show-links");

});
