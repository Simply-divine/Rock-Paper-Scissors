var huScore = 0;
var compScore = 0;
var roundno = 1;
var name = window.prompt("Enter Your Name:");
document.querySelector('.welcome').innerText = "Welcome " + name;
document.querySelector(".rock").addEventListener('click', checkwin, false);
document.querySelector(".paper").addEventListener('click', checkwin, false);
document.querySelector(".scissor").addEventListener('click', checkwin, false);
document.querySelector('.replay').addEventListener('click', replay, false);

function checkwin(x) {
    var y = x.target.id;
    console.log(y);
    var rand = Math.floor(Math.random() * 3);
    console.log(rand);
    document.querySelector('.welcome').innerText = "";
    if (y == rand) {
        document.querySelector('.winMessage').innerText = "Its a Tie..";
        roundno++;
        document.querySelector(".roundNo").innerHTML = roundno;
    }
    if (y == 1 && rand == 0 || y == 2 && rand == 1 || y == 0 && rand == 2) {
        document.querySelector('.winMessage').innerText = "You Won";
        document.querySelector(".YourScore").innerHTML = ++huScore;
        roundno++;
        document.querySelector(".roundNo").innerHTML = roundno;

    }
    if (y == 0 && rand == 1 || y == 1 && rand == 2 || y == 2 && rand == 0) {
        document.querySelector('.winMessage').innerText = "I Won";
        document.querySelector(".CompScore").innerHTML = ++compScore;
        roundno++;
        document.querySelector(".roundNo").innerHTML = roundno;
    }
    if (huScore == 5) {
        window.alert('You won the match..');
        replay();
    }
    if (compScore == 5) {
        window.alert('I won the match..');
        replay();
    }

}

function replay() {
    document.querySelector('.welcome').innerText = "Play Again";
    document.querySelector('.winMessage').innerText = "";
    huScore = 0;
    compScore = 0;
    roundno = 1;
    document.querySelector(".roundNo").innerHTML = roundno;
    document.querySelector(".CompScore").innerHTML = compScore;
    document.querySelector(".YourScore").innerHTML = huScore;
}