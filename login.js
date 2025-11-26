function login() {
    let first = document.getElementById("name1").value.trim();
    let last = document.getElementById("name2").value.trim();
    let output = document.getElementById("output");
 
    // Correct login
    if (first === "Hassan" && last === "Ali") {
        output.style.color = "green";
        output.innerHTML = "Logged in as: Hassan Ali";
    }
 
    // Wrong login
    else {
        output.style.color = "red";
        output.innerHTML = "feil informasjon, prøv igjen";
    }
}