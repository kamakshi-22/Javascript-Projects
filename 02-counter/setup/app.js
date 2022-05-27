//set initial count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
    btn.addEventListener("click",function(e){

        // currentTarget event property returns the element whose event listeners triggered the event
        //classList property returns the CSS classnames of an element
        const styles = e.currentTarget.classList;

        if(styles.contains('increase'))
        count++;
        else if(styles.contains('decrease'))
        count--;
        else
        count =0;

        (count>0) ? value.style.color = "green" : value.style.color="red";
        if(count==0)
        value.style.color = "#222";

        value.textContent = count;

    });
});
