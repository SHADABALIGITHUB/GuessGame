let a=document.getElementById("logo_img").addEventListener("mouseenter",function(){

   document.getElementById('logo_img').style.filter="grayscale(100%)";



})
let b=document.getElementById("logo_img").addEventListener("mouseleave",function(){

    document.getElementById('logo_img').style.filter="brightness(100%)";
 
 
 
 })


 function anime(){

 const heading = document.getElementById("animated-heading");
const text = heading.textContent;
heading.textContent = ""; // Clear the original text content

for (let i = 0; i < text.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = text[i];
    letterSpan.style.animation = `appearAnimation 2s ${i * 100}ms forwards`;
    heading.appendChild(letterSpan);
}

//css
const style = document.createElement("style");
style.textContent = `
    @keyframes appearAnimation {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
}

anime();
// for(let a=0;a<10;a++){
//     anime();
    

// }

// setTimeout(() => {
//     const scalingDiv = document.getElementById("scalingDiv");
//     scalingDiv.classList.add("fullscreen");
// }, 1000);

// const scalingDiv = document.getElementById("scalingDiv");
// scalingDiv.classList.add("fullscreen");

// scalingDiv.addEventListener("transitionend", function() {
//     scalingDiv.classList.remove("fullscreen");
//     scalingDiv.style.transition = "none"; // Disable further transitions
// });

// setTimeout(() => {
//         const scalingDiv = document.getElementById("scalingDiv");

         
//     }, 2000);
const scalingDiv = document.getElementById("scalingDiv");
scalingDiv.addEventListener("click", function() {
    this.style.transform = "scale(3)";
    this.style.backgroundColor="rgb(45, 45, 41,0.3)";
    this.style.top="0";
    this.style.left="0";
    setTimeout(()=>{
        const body = document.getElementById("first_page");
body.style.display = "none";

  const body2=document.getElementById('second_page');
  body2.style.display="block";

    
    },1000)
});



/*


second page 


******************
*/



const cards = document.querySelectorAll('.cards');
const Score=document.getElementById('score1');

let temp=0;
Score.addEventListener("click",function(){
    console.log(temp);
  
    
})

console.log(Score);
setTimeout(()=>{
   
    Score.style.color="red";
    
  

},3000)

  

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    temp++;
    Score.innerHTML=temp;
    Score.style.fontSize="35px";
    Score.style.margin="30px";

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));