function myFunctionBuc() {
    var x = document.getElementById("Ias");
    x.style.display = "none";

    x = document.getElementById("Brv");
    x.style.display = "none";

    x = document.getElementById("Tul");
    x.style.display = "none";

    x = document.getElementById("Buc");
    if (x.style.display === "none")
        x.style.display = "grid";
}

function myFunctionIas() {
    var x = document.getElementById("Buc");
    x.style.display = "none";

    x = document.getElementById("Brv");
    x.style.display = "none";

    x = document.getElementById("Tul");
    x.style.display = "none";

    x = document.getElementById("Ias");
    if (x.style.display === "none")
        x.style.display = "grid";
}

function myFunctionBrv() {
    var x = document.getElementById("Buc");
    x.style.display = "none";

    x = document.getElementById("Ias");
    x.style.display = "none";

    x = document.getElementById("Tul");
    x.style.display = "none";

    x = document.getElementById("Brv");
    if (x.style.display === "none")
        x.style.display = "grid";
}

function myFunctionTul() {
    var x = document.getElementById("Ias");
    x.style.display = "none";

    x = document.getElementById("Brv");
    x.style.display = "none";

    x = document.getElementById("Buc");
    x.style.display = "none";

    x = document.getElementById("Tul");
    if (x.style.display === "none")
        x.style.display = "grid";
}