let randomNumberGenerator1 = Math.floor(Math.random() * 6 + 1)
let randomNumberGenerator2 = Math.floor(Math.random() * 6 + 1)

let firstImage = document.querySelector(".img1")
let secondImage = document.querySelector(".img2")
let winner = document.querySelector("h1")



firstImage.setAttribute("src",`./images/dice${randomNumberGenerator1}.png`)
secondImage.setAttribute("src",`./images/dice${randomNumberGenerator2}.png`)

if (randomNumberGenerator1 > randomNumberGenerator2) {
  winner.textContent = "Player 1 Wins!"
} else if (randomNumberGenerator1 < randomNumberGenerator2){
  winner.textContent = "Player 2 Wins!"
} else{
  winner.textContent = "Its a TIE"
  }
