//oppgave 1
/*document.getElementById("F").addEventListener("click", function () {
    let data = document.getElementById("txt").value;
    let result = (data-32)*5/9
    document.getElementById("result").innerText = `${data}F er ${Math.round(result)}C`})
document.getElementById("C").addEventListener("click", function () {
    let data = document.getElementById("txt").value;
    let result = (9/5*data)+32
    document.getElementById("result").innerText = `${data}C er ${Math.round(result)}F`})
*/
//oppgave 2
/*document.getElementById("sjekkTallene").addEventListener("click", function () {
    let tall1 = Math.round(Math.random() * 10)
    document.getElementById("tall1").innerText = tall1;
    let tall2 = Math.round(Math.random() * 10)
    document.getElementById("tall2").innerText = tall2;

    if (tall1 > tall2) {
        console.log("Tall1 er større enn tall2");
        document.getElementById("result2").innerHTML = "Tall1 er større enn tall2"
    } else if (tall1 < tall2) {
        console.log("Tall2 er større enn tall1");
        document.getElementById("result2").innerHTML = "Tall2 er større enn tall1" 
    } else if  (tall1 === tall2) {
        console.log("Tallene er like")
        document.getElementById("result2").innerHTML = "tallene er like."
    }
})
*/

//oppgave 3
document.getElementById('knapp').addEventListener('click', function() {
    var userInput = document.getElementById('txt').value.toLowerCase();
    var reversedInput = userInput.split('').reverse().join('');
 
    if (userInput === reversedInput) {
        document.getElementById('result').textContent = userInput + " er et palindrom.";
    } else {
        document.getElementById('result').textContent = userInput + " er ikke et palindrom.";
    }
});