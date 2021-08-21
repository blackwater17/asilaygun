let n = true
document.querySelector(".languages").querySelectorAll("span").forEach((d) => {
    if (n) {
        d.style.color = "#545454"
    }

    else {
        d.style.color = "#202020"
    }

    d.style.color = "grey"

    n = !n

})