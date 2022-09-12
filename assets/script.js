const Questions = [{
    id: 0,
    q: "What is Two2+2?",
    a: [{ text: "4", isCorrect: false },
     { text: "Four", isCorrect: false },
     { text: "6", isCorrect: true },
     { text: "10", isCorrect: false }
    ]
  
   },
   {
    id: 1,
    q: "What came first the Chicken or the Egg",
    a: [{ text: "Chicken", isCorrect: false, isSelected: false },
     { text: "Egg", isCorrect: false },
     { text: "The", isCorrect: true },
     { text: "First", isCorrect: false }
    ]
  
   },
   {
    id: 2,
    q: "What makes the world go round?",
    a: [{ text: "Money", isCorrect: false },
     { text: "Gravity", isCorrect: false },
     { text: "You <3", isCorrect: true },
     { text: "Some greater force idk tbh", isCorrect: false }
    ]
  
   }
  
  ]
  
  var start = true;
  
  function iterate(id) {
  
   // Getting the result display section
   var result = document.getElementsByClassName("result");
   result[0].innerText = "";
  
   // Getting the question
   const question = document.getElementById("question");
  
   // Setting the question text
   question.innerText = Questions[id].q;
  
   // Getting the options
   const op1 = document.getElementById('op1');
   const op2 = document.getElementById('op2');
   const op3 = document.getElementById('op3');
   const op4 = document.getElementById('op4');
  
  
   // Providing option text
   op1.innerText = Questions[id].a[0].text;
   op2.innerText = Questions[id].a[1].text;
   op3.innerText = Questions[id].a[2].text;
   op4.innerText = Questions[id].a[3].text;
  
   // Providing the true or false value to the options
   op1.value = Questions[id].a[0].isCorrect;
   op2.value = Questions[id].a[1].isCorrect;
   op3.value = Questions[id].a[2].isCorrect;
   op4.value = Questions[id].a[3].isCorrect;
  
   var selected = "";
  
   // Show selection for op1
   op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
   })
  
   // Show selection for op2
   op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
   })
  
   // Show selection for op3
   op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
   })
  
   // Show selection for op4
   op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
   })
  
   // Grabbing the evaluate button
   const evaluate = document.getElementsByClassName("evaluate");
  
   // Evaluate method
   evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
     result[0].innerHTML = "True";
     result[0].style.color = "green";
    } else {
     result[0].innerHTML = "False";
     result[0].style.color = "red";
    }
   })
  }
  
  if (start) {
   iterate("0");
  }
  
  const next = document.getElementsByClassName('next')[0];
  var id = 0;
  
  next.addEventListener("click", () => {
   start = false;
   if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
   }
  
  })

  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var time = 60 / 2, 
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);
};
  