function dice(){
var randomNo1 = Math.random();
randomNo1 *= 6;
randomNo1 = Math.floor(randomNo1) + 1;

var randomNo2 = Math.random();
randomNo2 *= 6;
randomNo2 = Math.floor(randomNo2) + 1;

document.querySelectorAll(".img1")[0].setAttribute("src","images/dice"+randomNo1+".png");
document.querySelectorAll(".img2")[0].setAttribute("src","images/dice"+randomNo2+".png");

    if (randomNo1 > randomNo2) {
        document.querySelector("h1").innerHTML = "Player1 Wins!";
    } else if (randomNo1 < randomNo2) {
        document.querySelector("h1").innerHTML = "Player2 Wins";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}

