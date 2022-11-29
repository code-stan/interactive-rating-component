const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const btns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".sub-btn");
const ratedValue = document.querySelector(".rated-value");

let conditionalMsgHeader = document.querySelector(".thank-you-msg h1");
let conditionalMsgP = document.querySelector(".thank-you-msg p");


//GRABBING THE RATING VALUES
let ratingNumber = 0;
;
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        if(e.currentTarget.classList.contains = "rating-btn"){
            ratingNumber = btn.textContent;
        }
    })
});

//SWITCHING TO THE THANK YOU PAGE
const submitAndNext = function(){
    ratedValue.textContent = ratingNumber;
    ratingContainer.classList.add("offDisplay");
    thankYouContainer.classList.add("onDisplay");
    if(ratingNumber === 0){
        conditionalMsgHeader.textContent = "Oops"
        conditionalMsgP.textContent = "Please reload this page and provide a feedback on our product support page"
    }

}
submitBtn.addEventListener("click", submitAndNext)
