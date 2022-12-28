var Parts = [

    part1 = {
        question: `1) Why is AWS more economical than 
    traditional data centers for applications with
    varying compute workloads?`,

        optionA: `Amazon EC2 costs are billed on a monthly basis.`,

        optionB: `Users retain full administrative access to their Amazon EC2 instances.`,

        optionC: `Amazon EC2 instances can be launched on demand when needed.`,

        optionD: `Users can permanently run enough instances to handle peak workloads.`,

        correct: `Amazon EC2 instances can be launched on demand when needed.`,

        indexOfDescription: 1
    },

    part2 = {
        question: `2) Which AWS service would simplify
    the migration of a database to AWS?`,

        optionA: `AWS Storage Gateway.`,

        optionB: `AWS Database Migration Service (AWS DMS).`,

        optionC: `Amazon EC2`,

        optionD: `Amazon AppStream 2.0.`,

        correct: `AWS Database Migration Service (AWS DMS).`,

        indexOfDescription: 2

    },

    part3 = {
        question: `3) Which AWS offering enables users to find, 
    buy, and immediately start using software solutions 
    in their AWS environment?`,

        optionA: `AWS Config.`,

        optionB: `AWS OpsWorks.`,

        optionC: `AWS SDK.`,

        optionD: `AWS Marketplace.`,

        correct: `AWS Marketplace.`,

        indexOfDescription: 3

    },

    part4 = {
        question: `4) Which AWS networking service enables a company to create a virtual network within AWS?`,

        optionA: `AWS Config.`,

        optionB: `Amazon Route 53.`,

        optionC: `AWS Direct Connect.`,

        optionD: `Amazon Virtual Private Cloud (Amazon VPC).`,

        correct: `Amazon Virtual Private Cloud (Amazon VPC).`,

        indexOfDescription: 4

    },

    part5 = {
      question: `5) Which AWS networking service enables a company to create a virtual network within AWS?`,

      optionA: `AWS Config.`,

      optionB: `Amazon Route 53.`,

      optionC: `AWS Direct Connect.`,

      optionD: `Amazon Virtual Private Cloud (Amazon VPC).`,

      correct: `Amazon Virtual Private Cloud (Amazon VPC).`,

      indexOfDescription: 4

  },

]
var temp="a";
var count = 1;
var length_parts = Parts.length;
let random
function libity()
{
    if(temp != "a"){
        Parts.splice(temp, 1);
    }

    if (Parts.length == 0)
        {
            window.location.href = "fin.html";
            alert("finish");
        }

    
     random = Math.floor((Math.random() * Parts.length));
    fuck=random
    // console.log('one')
    // console.log(random)
    document.getElementById('display-question').innerHTML = Parts[random].question;
    // console.log('two')
    // console.log(random)
    // console.log('three')
    // console.log(random)
    // console.log('foor')
    // console.log(random)
    // console.log('five')
    // console.log(random)
    document.getElementById('option-one-label').innerHTML = Parts[random].optionA;
    document.getElementById('option-two-label').innerHTML = Parts[random].optionB;
    document.getElementById('option-three-label').innerHTML = Parts[random].optionC;
    document.getElementById('option-four-label').innerHTML = Parts[random].optionD;
    
    document.getElementById('question-number').innerHTML = count;
    document.getElementById('question-number1').innerHTML = length_parts;
    document.getElementById('question-number21').innerHTML = length_parts;
    document.getElementById("next_etap").disabled = true;
    temp = random;
    count++;
    

}

// var question1 = document.quiz.question1.value;
// var question2 = document.quiz.question2.value;
// var question3 = document.quiz.question3.value;
// var question4 = document.quiz.question4.value;
let answer_user="";
let countscore = 1;

// function clearcolor()
// {
//   let x =Array.from(document.querySelectorAll(".radio"))
  
//     x.forEach(box => {
//       box.checked=false 
//     });
    
// }
function next_question()
{
  if(answer_user === Parts[temp].correct)
  {
    document.getElementById("player-score").innerHTML = countscore++;
    // console.log('correct');
    // console.log(temp);
    let x =(document.querySelectorAll(".radio"))
    
  

    x.forEach(box => {
      
      if (!box.checked)
      {
        box.parentElement.style.backgroundColor = "red";
      }
    });
    
  }else if(answer_user != Parts[temp].correct){
    console.log('incorrect');
    //console.log(temp);
  }
    
    libity();
    onTimesUp();
    timePassed = -1;
    startTimer();

    
}

function timeOut()
{
  setTimeout(next_question, 2000);
}

libity();

function access_next(answer)
{
  answer_user = answer.textContent;
  // console.log(answer_user)
  document.getElementById("next_etap").disabled = false;
  
}




// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 333;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
var remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app_app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      next_question();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}