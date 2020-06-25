var speler =
    document.getElementById("speler");
var object = document.getElementById("object");

var aantal = 0;

function jump() {
    if (speler.classList != "animate") {
        speler.classList.add("animate");
    }
    setTimeout(function() {
        speler.classList.remove("animate");
    }, 500)
}

var checkDead = setInterval(function() {
    var spelerTop =
        parseInt(window.getComputedStyle(speler).getPropertyValue("top"));
    var objectLeft =
        parseInt(window.getComputedStyle(object).getPropertyValue("left"));
    if (objectLeft < 40 && objectLeft > 0 && spelerTop >= 260) {
        location.replace("verloren.html")

    } else {
        aantal = aantal + 1;
        document.getElementById("stand").innerHTML = "De score is " + aantal;

    }
}, 10);

