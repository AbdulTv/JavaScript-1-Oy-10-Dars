function askName() {
    var name = prompt("Ismingizni kiriting:");

    if (name) {
        document.getElementById("response").innerHTML = "Salom, " + name + "!";
    } else {
        document.getElementById("response").innerHTML = "Ism kiriting.";
    }
}
