const easteregg = document.querySelector("#clickme");
let click = 0;

easteregg.addEventListener("click", e=> {
    e.preventDefault();
    click += 1;
    if(click == 10) {
        console.log("Hi.");
        easteregg.classList.add("wow");
        document.body.style.background = "url('nyancat.gif')";
    } 
});
