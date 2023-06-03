let p1_active = 0

document.querySelector(".right-arrow-music").addEventListener("click", () => {
    p1_active++


    for (let i=0; i<document.querySelectorAll(".card-music").length; i++) {
        if (p1_active%4 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-music")[i].style.visibility="hidden";
            document.querySelectorAll(".card-music")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-music")[i].style.visibility="visible";
            document.querySelectorAll(".card-music")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-music").addEventListener("click", () => {
    p1_active--

    if (p1_active < 0) p1_active+=4

    for (let i=0; i<document.querySelectorAll(".card-music").length; i++) {
        if (p1_active%4 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-music")[i].style.visibility="hidden";
            document.querySelectorAll(".card-music")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-music")[i].style.visibility="visible";
            document.querySelectorAll(".card-music")[i].style.opacity= 1;
        }
    }
})




/******************************* */



let p2_active = 0

document.querySelector(".right-arrow-fut").addEventListener("click", () => {
    p2_active++


    for (let i=0; i<document.querySelectorAll(".card-fut").length; i++) {
        if (p2_active%6 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-fut")[i].style.visibility="hidden";
            document.querySelectorAll(".card-fut")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-fut")[i].style.visibility="visible";
            document.querySelectorAll(".card-fut")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-fut").addEventListener("click", () => {
    p2_active--

    if (p2_active < 0) p2_active+=6

    for (let i=0; i<document.querySelectorAll(".card-fut").length; i++) {
        if (p2_active%6 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-fut")[i].style.visibility="hidden";
            document.querySelectorAll(".card-fut")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-fut")[i].style.visibility="visible";
            document.querySelectorAll(".card-fut")[i].style.opacity= 1;
        }
    }
})


/************************************ */

let p3_active = 0

document.querySelector(".right-arrow-game").addEventListener("click", () => {
    p3_active++


    for (let i=0; i<document.querySelectorAll(".card-game").length; i++) {
        if (p3_active%5 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-game")[i].style.visibility="hidden";
            document.querySelectorAll(".card-game")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-game")[i].style.visibility="visible";
            document.querySelectorAll(".card-game")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-game").addEventListener("click", () => {
    p3_active--

    if (p3_active < 0) p3_active+=5

    for (let i=0; i<document.querySelectorAll(".card-game").length; i++) {
        if (p3_active%5 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-game")[i].style.visibility="hidden";
            document.querySelectorAll(".card-game")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-game")[i].style.visibility="visible";
            document.querySelectorAll(".card-game")[i].style.opacity= 1;
        }
    }
})


/************************************ */


let p4_active = 0

document.querySelector(".right-arrow-youtube").addEventListener("click", () => {
    p4_active++


    for (let i=0; i<document.querySelectorAll(".card-youtube").length; i++) {
        if (p4_active%5 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-youtube")[i].style.visibility="hidden";
            document.querySelectorAll(".card-youtube")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-youtube")[i].style.visibility="visible";
            document.querySelectorAll(".card-youtube")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-youtube").addEventListener("click", () => {
    p4_active--

    if (p4_active < 0) p4_active+=5

    for (let i=0; i<document.querySelectorAll(".card-youtube").length; i++) {
        if (p4_active%5 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-youtube")[i].style.visibility="hidden";
            document.querySelectorAll(".card-youtube")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-youtube")[i].style.visibility="visible";
            document.querySelectorAll(".card-youtube")[i].style.opacity= 1;
        }
    }
})

/************************************ */


let p5_active = 0

document.querySelector(".right-arrow-tekken").addEventListener("click", () => {
    p5_active++
    for (let i=0; i<document.querySelectorAll(".card-tekken").length; i++) {
        if (p5_active%7 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-tekken")[i].style.visibility="hidden";
            document.querySelectorAll(".card-tekken")[i].style.opacity= 0;
        }

        else {
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-tekken")[i].style.visibility="visible";
            document.querySelectorAll(".card-tekken")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-tekken").addEventListener("click", () => {
    p5_active--

    if (p5_active < 0) p5_active+=7

    for (let i=0; i<document.querySelectorAll(".card-tekken").length; i++) {
        if (p5_active%7 != i) {
            //document.querySelectorAll(".card")[i].style.display = "none"
            document.querySelectorAll(".card-tekken")[i].style.visibility="hidden";
            document.querySelectorAll(".card-tekken")[i].style.opacity= 0;
        }

        else {
  
            //document.querySelectorAll(".card")[i].style.display = "inline-block"
            document.querySelectorAll(".card-tekken")[i].style.visibility="visible";
            document.querySelectorAll(".card-tekken")[i].style.opacity= 1;
        }
    }
})

/************************************ */


let p6_active = 0

document.querySelector(".right-arrow-movie").addEventListener("click", () => {
    p6_active++
    for (let i=0; i<document.querySelectorAll(".card-movie").length; i++) {
        if (p6_active%4 != i) {
            document.querySelectorAll(".card-movie")[i].style.visibility="hidden";
            document.querySelectorAll(".card-movie")[i].style.opacity= 0;
        }
        else {
            document.querySelectorAll(".card-movie")[i].style.visibility="visible";
            document.querySelectorAll(".card-movie")[i].style.opacity= 1;
        }
    }
})


document.querySelector(".left-arrow-movie").addEventListener("click", () => {
    p6_active--

    if (p6_active < 0) p6_active+=4

    for (let i=0; i<document.querySelectorAll(".card-movie").length; i++) {
        if (p6_active%4 != i) {
            document.querySelectorAll(".card-movie")[i].style.visibility="hidden";
            document.querySelectorAll(".card-movie")[i].style.opacity= 0;
        }
        else {
            document.querySelectorAll(".card-movie")[i].style.visibility="visible";
            document.querySelectorAll(".card-movie")[i].style.opacity= 1;
        }
    }
})