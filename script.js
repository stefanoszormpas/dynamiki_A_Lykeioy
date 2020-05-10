
  
 const questionText=document.querySelector(".question-text");
 const optionBox=document.querySelector(".option-box");
 const currentQuestionNum=document.querySelector(".current-question-num");
 const answerDescription=document.querySelector(".answer-description");
 const nextQuestionBtn=document.querySelector(".next-question-btn");
 const correctAnswers=document.querySelector(".correct-answers");
 const seeResultBtn=document.querySelector(".see-result-btn");
 const remainingTime=document.querySelector(".remaining-time");
 const timeUpText=document.querySelector(".time-up-text");
 const quizHomeBox=document.querySelector(".quiz-home-box");
 const quizBox=document.querySelector(".quiz-box");
 const quizOverBox=document.querySelector(".quiz-over-box");
 const startAgainQuizBtn=document.querySelector(".start-again-quiz-btn");
 const goHomeBtn=document.querySelector(".go-home-btn");
 const startQuizBtn=document.querySelector(".start-quiz-btn");
 let attempt=0;
 let questionIndex=0;
 let score=0;
 let number=0;
 let myArray=[];
 let interval;

 // questions and options and  answer and answer description
 // array of objects
 myApp=[
         // {
         // question:"κείμενοερώτησης",
         // options:["επιλογή1","επιλογή2","επιλογή3","επιλογή4"],
         // answer:2,
         // description: "περιγραφήαπάντησης",
         // imgPath:"img",
         // imgSrc:"1.1.jpg"
          //  } ,

           
        {
          question:"Η κάθετη αντίδραση του κεκλιμένου στο σώμα του σχήματος έχει μέτρο :",
          options:["mg","mgημθ","mgσυνθ","μmgσυνθ"],
          answer:2,
          imgPath:"img",
          imgSrc:"1.1.jpg"
        },
        { 
          question:"Σώμα μάζας m = 2 Kg δέχεται σταθερή συνισταμένη δύναμη  ΣF = 10 N . Αν το σώμα εκκινεί από την ηρεμία τότε σε χρόνο 1 s διανύει διάστημα 5 m .",
          options:["σωστό","λάθος"],
          answer:1,
          description:"Η επιτάχυνση του σώματος είναι 2 $\\frac{m}{{{s}^{2}}}$ οπότε το διάστημα που διανύει σε 1 s θα είναι $x=\\frac{1}{2}a{{t}^{2}}=\\frac{1}{2}{{5.1}^{2}}=2.5$m "
        },
        {
          question:"Ο συντελεστής στατικής τριβής μεταξύ σώματος και επιπέδου στο σχήμα ισούται με :",
          options:["5"," 2 ","0.5","0.2"],
          answer:3,
          description:"Είναι  $\\mu =\\frac{{{T}_{st}}}{N}$ . Από την ισορροπία κατά την διεύθυνση του κεκλιμένου παίρνουμε ${{T}_{st}}$ = 2 και από την ισορροπία στον κατακόρυφο άξονα παίρνουμε Ν = 10 οπότε  μ = 2/10 =0.2.",
          imgPath:"img",
          imgSrc:"1.3.jpg"

        },
        {
          question:"Η εξίσωση της ταχύτητας για ένα σώμα που κινείται ευθύγραμμα είναι υ = 3 + 2t. Αν το σώμα έχει μάζα m = 2 Kg τότε η συνισταμένη δύναμη στο σώμα έχει μέτρο 1 Ν",
          options:["σωστό","λάθος"],
          answer:1,
          description:"Από την εξίσωση της ταχύτητας προκύπτει α = 2 και από τον 2ο νόμο Newton προκύπτει ΣF = mα = 4 Ν"
        },
        { 
         question:"Το σώμα Α του σχήματος ακινητεί , ενώ το Β κινείται με σταθερή ταχύτητα . Σε ποιο από τα δύο σώματα η συνισταμένη δύναμη είναι μεγαλύτερη : ",
         options:["Στο Α ","Στο Β ","Σε κανένα "],
         answer:2,
         imgPath:"img",
         imgSrc:"1.5.jpg"
        },
        {
          question:"Αν  F η συνισταμένη δύναμη που ασκείται σ' ένα σώμα, υ η ταχύτητά του και α η επιτάχυνση που αποκτά, τότε ισχύει:",
          options:["η F και η υ έχουν πάντοτε <br> την ίδια κατεύθυνση","η F και η α έχουν πάντοτε <br> την ίδια κατεύθυνση","η υ και η α έχουν πάντοτε<br> την ίδια κατεύθυνση","η F, η υ και η α έχουν πάντοτε<br> την ίδια κατεύθυνση"],
          answer:1,
          description: "Από τον δεύτερο νόμο του Newton είναι  $\\sum{\\overrightarrow{F}}=m\\overrightarrow{a}$και επειδή m > 0 τα διανύσματα $\\sum{\\overrightarrow{F}}$ και $\\overrightarrow{a}$ είναι ομόρροπα ."
         },
         {
          question:"Τρία βιβλία τοποθετούνται το ένα πάνω στο άλλο, όπως φαίνεται στο παρακάτω σχήμα.Τα βάρη των βιβλίων είναι 4 Ν, 5 Ν και 10 Ν. Η συνισταμένη δύναμη που ασκείται στο μεσαίο βιβλίο είναι ",
          options:["4 Ν προς τα κάτω","5 Ν προς τα πάνω","9 Ν προς τα κάτω","μηδέν"],
          answer:3,
          description: "Αφού ισορροπεί το βιβλίο , η συνισταμένη δύναμη πάνω του είναι μηδενική",
          imgPath:"img",
          imgSrc:"1.7.jpg"
          },
          { 
          question:"Η συνισταμένη των δυνάμων δράση - αντίδραση είναι μηδενική γιατί οι δυνάμεις έχουν ίδια μέτρα αλλά αντίθετη φορά",
          options:["σωστό","λάθος"],
          answer:1,
          description:"Οι δυνάμεις δράσης - αντίδρασης δεν δημιουργούν συνισταμένη γιατί δεν δρουν στο ίδιο σώμα  "
          },
          {
          question:"Τι συμβαίνει με την αδράνεια ενός σώματος του οποίου η ταχύτητα διπλασιάζεται;",
          options:["Η αδράνεια του σώματος παραμένει αμετάβλητη","Η αδράνεια του σώματος διπλασιάζεται","Η αδράνεια του σώματος τετραπλασιάζεται","Η αδράνεια του σώματος γίνεται η μισή της αρχικής"],
          answer:0,
          description: "Το μέτρο της αδράνειας ενός σώματος είναι η μάζα του η οποία παραμένει σταθερή",
          },
          {
          question:" Η συνισταμένη δύναμη στο m3 είναι  ",
          options:["$\\frac{{{m}_{3}}}{{{m}_{1}}+{{m}_{2}}+{{m}_{3}}}F$","$\\frac{F}{{{m}_{1}}+{{m}_{2}}+{{m}_{3}}}$","$F$","$\\left( {{m}_{1}}+{{m}_{2}}+{{m}_{3}} \\right)F$"],
          answer:0,
          description: "Η επιτάχυνση του συστήματος είναι $a=\\frac{F}{{{m}_{1}}+{{m}_{2}}+{{m}_{3}}}$οπότε η συνισταμένη δύναμη στο ${{m}_{3}}$είναι $\\text{ }\\!\\!\\Sigma\\!\\!\\text{ }{{F}_{3}}={{m}_{3}}a=\\frac{{{m}_{3}}}{{{m}_{1}}+{{m}_{2}}+{{m}_{3}}}F$",
          imgPath:"img",
          imgSrc:"1.10.jpg"
          }
       ]
 // end of array

  function load(){
  	number++;
    questionText.innerHTML=myApp[questionIndex].question;
    if(typeof myApp[questionIndex].imgSrc !== 'undefined'){
         const img=document.createElement("img");
          img.src=myApp[questionIndex].imgPath +"/"+myApp[questionIndex].imgSrc;
          questionText.appendChild(img)
        }
    createOptions();
    scoreBoard();
    currentQuestionNum.innerHTML=number + " / " + myApp.length;
  }

  function createOptions(){
  	optionBox.innerHTML="";
  	let animationDelay=0.2;
  	 for(let i=0; i<myApp[questionIndex].options.length; i++){
  	   const option=document.createElement("div");
  	         option.innerHTML=myApp[questionIndex].options[i];
  	         option.classList.add("option");
             MathJax.Hub.Queue(["Typeset",MathJax.Hub,"option"]);
  	         option.id=i;
  	         option.style.animationDelay=animationDelay + "s";
  	         animationDelay=animationDelay+0.2;
  	         option.setAttribute("onclick","check(this)");
  	         optionBox.appendChild(option);
  	 }
  }
  
  function generateRandomQuestion(){
      const randomNumber=Math.floor(Math.random() * myApp.length);
      let hitDuplicate=0;
      if(myArray.length == 0){
      	questionIndex=randomNumber;
      }
      else{
         for(let i=0; i<myArray.length; i++){
         	if(randomNumber == myArray[i]){
         		// if duplicate found
         		hitDuplicate=1;
         	}
         }
         if(hitDuplicate == 1){
         	generateRandomQuestion();
         	return;
         }
         else{
           questionIndex=randomNumber;
         }
      }
      
      myArray.push(randomNumber);
      //console.log(myArray)
      load();
  }

 function check(ele){
 	  const id=ele.id;
 	  if(id==myApp[questionIndex].answer){
 	  	ele.classList.add("correct");
 	  	score++;
 	  	scoreBoard();
 	  }
 	  else{
 	  	ele.classList.add("wrong");
 	  	// show correct option when clicked answer is wrong
 	  	 for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }
 	  }
 	  attempt++;
 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
 	  stopTimer();

 	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function timeIsUp(){
 	  showTimeUpText();
     // when time is up show correct answer
     for(let i=0; i<optionBox.children.length; i++){
            if(optionBox.children[i].id==myApp[questionIndex].answer){
            	optionBox.children[i].classList.add("show-correct");
            }
 	  	 }

 	  disableOptions()
 	  showAnswerDescription();
 	  showNextQuestionBtn();
	  if(number == myApp.length){
 	  	quizOver();
 	  }
 }

 function startTimer(){
      let timeLimit=30;
      remainingTime.innerHTML=timeLimit;
      remainingTime.classList.remove("less-time");
      interval=setInterval(()=>{
        timeLimit--;
        if(timeLimit < 10){
        	timeLimit="0"+timeLimit;
        }
        if(timeLimit < 6){
         remainingTime.classList.add("less-time");
        }
        remainingTime.innerHTML=timeLimit;
        if(timeLimit == 0){
        	clearInterval(interval);
        	timeIsUp();
        }
      },1000)
 }

function stopTimer(){
    clearInterval(interval);
}

 function disableOptions(){
 	for(let i=0; i<optionBox.children.length; i++){
 		optionBox.children[i].classList.add("already-answered");
 	}
 }

 function showAnswerDescription(){
 	if(typeof myApp[questionIndex].description !== 'undefined'){
 		 answerDescription.classList.add("show");
         answerDescription.innerHTML=myApp[questionIndex].description;
         MathJax.Hub.Queue(["Typeset",MathJax.Hub,"option"]);
 	}
 }
 function hideAnswerDescription(){
 	answerDescription.classList.remove("show");
    answerDescription.innerHTML="";
 }
 function showNextQuestionBtn(){
 	nextQuestionBtn.classList.add("show");
 }
 function hideNextQuestionBtn(){
 	nextQuestionBtn.classList.remove("show");
 }
 function showTimeUpText(){
 	timeUpText.classList.add("show");
 }
function hideTimeUpText(){
 	timeUpText.classList.remove("show");

 }
 function scoreBoard(){
 	correctAnswers.innerHTML=score;
 }

 nextQuestionBtn.addEventListener("click",nextQuestion);

 function nextQuestion(){
 	 generateRandomQuestion();
 	 hideNextQuestionBtn();
 	 hideAnswerDescription();
 	 hideTimeUpText();
 	 startTimer();
 }

 function quizResult(){
   document.querySelector(".total-questions").innerHTML=myApp.length;
   document.querySelector(".total-attemp").innerHTML=attempt;
   document.querySelector(".total-correct").innerHTML=score;
   document.querySelector(".total-wrong").innerHTML=attempt-score;
   const percentage=(score/myApp.length)*100;
   document.querySelector(".percentage").innerHTML=percentage.toFixed(2) + "%";
 }
 function resetQuiz(){
   attempt=0;
   // questionIndex=0;
   score=0;
   number=0;
   myArray=[];
 }

 function quizOver(){
     nextQuestionBtn.classList.remove("show");
     seeResultBtn.classList.add("show");
 }

  seeResultBtn.addEventListener("click",()=>{
  	  
  	  quizBox.classList.remove("show");
  	  seeResultBtn.classList.remove("show");
      quizOverBox.classList.add("show");
      quizResult();
  })

  startAgainQuizBtn.addEventListener("click",()=>{
  	quizBox.classList.add("show");
    quizOverBox.classList.remove("show");
    resetQuiz();
    nextQuestion();
  })

  goHomeBtn.addEventListener("click",()=>{
  	quizOverBox.classList.remove("show");
  	quizHomeBox.classList.add("show");
    resetQuiz();
  })
  startQuizBtn.addEventListener("click",()=>{
  	 quizHomeBox.classList.remove("show");
  	quizBox.classList.add("show");
     nextQuestion();

  })

  // window.onload=()=>{
  	
  // }

 






