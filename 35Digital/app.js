//! variables
const question = document.getElementById("question");
const listOne = document.getElementById("listOne");
const listTwo = document.getElementById("listTwo");
const listThree = document.getElementById("listThree");
const list = document.querySelectorAll(".list");

const answer = document.getElementById("answer");
const btn = document.querySelector("#btn");
const showPercentage = document.querySelectorAll(".showPercentage");
const isIcon = document.querySelectorAll(".isIcon");

//! global variables
let testBool = true;
let voteReact = 0;
let voteVue = 0;
let voteAngular = 0;
let totalVote = voteReact + voteVue + voteAngular;

//! funcs
function toggle() {
  if (testBool == false) {
    question.style.display = "none";
    answer.style.display = "block";
  } else if (testBool == true) {
    question.style.display = "block";
    answer.style.display = "none";
  }
}
const arrangePercentage = () => {
  totalVote++;
  showPercentage[0].innerText = ((voteReact / totalVote) * 100)
    .toFixed(1)
    .replace(".", ",");
  showPercentage[1].innerText = ((voteVue / totalVote) * 100)
    .toFixed(1)
    .replace(".", ",");
  showPercentage[2].innerText = ((voteAngular / totalVote) * 100)
    .toFixed(1)
    .replace(".", ",");
};

//! eventHandlers
list.forEach((each) => {
  each.addEventListener("click", (e) => {
    testBool = false;
    toggle();

    if (e.target.id == "listOne") {
      voteReact++;
      isIcon[0].style.display = "inline-block";
      isIcon[1].style.display = "none";
      isIcon[2].style.display = "none";
      if (voteReact > 80) {
        
      } else {
        
      }

      arrangePercentage();
    } else if (e.target.id == "listTwo") {
      voteVue++;
      isIcon[1].style.display = "inline-block";
      isIcon[0].style.display = "none";
      isIcon[2].style.display = "none";
      arrangePercentage();
    } else {
      voteAngular++;
      isIcon[2].style.display = "inline-block";
      isIcon[1].style.display = "none";
      isIcon[0].style.display = "none";
      arrangePercentage();
    }
  });
});

btn.addEventListener("click", () => {
  testBool = true;
  toggle();
});
