
function rollDice(){
    let die1 = Math.floor(Math.random() * 6);
    let die2 = Math.floor(Math.random() * 6);

    switch(die1){
        case 0:
            document.getElementById("die-1").src="assets/die1.png";
            break;
        case 1:
            document.getElementById("die-1").src="assets/die2.png";
            break;
        case 2:
            document.getElementById("die-1").src="assets/die3.png";
            break;
        case 3:
            document.getElementById("die-1").src="assets/die4.png";
            break;
        case 4:
            document.getElementById("die-1").src="assets/die5.png";
            break;
        case 5:
            document.getElementById("die-1").src="assets/die6.png";
            break;
    }
    switch(die2){
        case 0:
            document.getElementById("die-2").src="assets/die1.png";
            break;
        case 1:
            document.getElementById("die-2").src="assets/die2.png";
            break;
        case 2:
            document.getElementById("die-2").src="assets/die3.png";
            break;
        case 3:
            document.getElementById("die-2").src="assets/die4.png";
            break;
        case 4:
            document.getElementById("die-2").src="assets/die5.png";
            break;
        case 5:
            document.getElementById("die-2").src="assets/die6.png";
            break;
    }

    let sum = die1 + die2 + 2;

    document.getElementById("side-bar").innerHTML="You Rolled " + sum.toString() + "!";
}
