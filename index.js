// data model
const STORE = {
    questions: [{
      question: "Which is the only American state to begin with the letter 'p'?",
      answers: ["Pennsylvania", "Pittsburgh", "Philadelphia", "Volaille"],
      correctAnswerIndex: 0
      },{
      question: "Name the world's biggest island",
      answers: ["Jamaica", "Greenland", "Dominican Republic", "Puerto Rico"],
      correctAnswerIndex: 1
      },{
      question: "What is the world's longest river?",
      answers: ["Niles", "Ganges", "Amazon", "Mississippi River"],
      correctAnswerIndex: 2
      },{
      question: "What is Earth largest continent?",
      answers: ["Asia", "Europe", "Antarctica", "Africa"],
      correctAnswerIndex: 0
      },{
      question: "What razor-thin country accounts for more than half of the western coastline of South America?",
      answers: ["Peru", "Ecuador", "chile", "Bolivia"],
      correctAnswerIndex: 2
      },{
      question: "What river runs through Baghdad",
      answers: ["Euphrates", "Karun", "Jordan", "Tigris river"],
      correctAnswerIndex: 3
      },{
      question: "What country has the most natural lakes?",
      answers: ["Australia", "Canada", "India", "United States"],
      correctAnswerIndex: 1
      },{
      question: "What is the only sea without any coasts?",
      answers: ["celebes sea", "Adriatic sea", "Mediterranean sea", "Sargasso Sea"],
      correctAnswerIndex: 3
      },{
      question: "What percentage of the River Nile is located in Egypt?",
      answers: [" McMurdo, Antactica", "Atacama desert", "Sahara Desert", "Kudra, libya"],
      correctAnswerIndex: 0
      },{
      question: "In what country can you visit Machu Picchu?",
      answers: ["Columbia", "Bolivia", "Peru", "Chile"],
      correctAnswerIndex: 2
      },],
    currentQuestionIndex: 0,
    numberCorrect: 0,
  };
  
  
  //Generate and set the HTML for each question and 4 answers on the .js-questions-page on next button click, as well as poulate the total number of questions element and the current question elemet.
  
  // Sets total question number everywhere within the HTML
  function setQuestionTotal(totalQuestions) {
    $('.js-total-number').text(totalQuestions);
  }
  
  // Sets current question number everywhere within the HTML
  function setCurrentQuestionNumber(currentQuestionNumber) {
    $('.js-current-number').text(currentQuestionNumber);
  }
  
  // Sets the question, takes a string and populates the question with the string
  function setQuestion(currentQuestion) {
    $('.js-current-question').html(currentQuestion);
  }
  
  // Sets the 4 answers, takes an array of stings and populates that answer with the stings
  function setAnswers(currentAnswers) {
    $('.js-current-answers').each(function (index, answerElement) {
        $(answerElement).html(currentAnswers[index]); 
    });
  }
  
  // on click event to check is page is hidden, if not change the class on page to 'hidden', remove the hidden class from page. 
  function showHideFinal() {
    $('.js-question-page').hasClass("hidden") ? $('.js-question-page').removeClass("hidden") : $('.js-question-page').addClass("hidden");
    $('.js-final-page').hasClass("hidden") ? $('.js-final-page').removeClass("hidden") : $('.js-final-page').addClass("hidden");
  }
  
  //reset radio buttons back
  function resetRadioButtons() {
    let allRadioLabels = $('label:has(input:radio)');
    let radioButtons = $(":radio[name='option']");
    let uncheckedradioButtons = $('input[type="radio"]:not(:checked)');
    allRadioLabels.removeClass("green-highlight").removeClass("red-highlight");
    radioButtons.prop('checked', false);
    uncheckedradioButtons.prop('disabled', false);
  }
  
  //reset answer is:
  function resetCorrectAnswerIs() {
    $('.js-correct-answer-is').text(" ");
    $('.js-correct-wrong').text(" ");
  }
  
  
  // Function that reads the STORE and passes the proper data to the 4 other functions
  function activateQuestion() {
    
    STORE.currentQuestionIndex = STORE.currentQuestionIndex + 1 ;
    let currentQuestionObject = STORE.questions[STORE.currentQuestionIndex];
    let currentQuestion = currentQuestionObject.question;
    let currentAnswers = currentQuestionObject.answers;
    let correctAnswerNumber = currentQuestionObject.correctAnswerIndex;
  
    setQuestionTotal(STORE.questions.length);
    setCurrentQuestionNumber(STORE.currentQuestionIndex + 1);
    setQuestion(currentQuestion);
    setAnswers(currentAnswers);
    resetRadioButtons();
    resetCorrectAnswerIs();
  }
  
  //When the user clicks the next button it activates the next question then after answering the final question show the final-page.
  
  $('#submit-answer').on('click', function(event){
    event.preventDefault();
    if (STORE.currentQuestionIndex === STORE.questions.length-1) {
    showHideFinal();
    } else {
    activateQuestion();
    }
  });
  
  
  // Show the .js-questions-page and hide the .js-start-page when the user clicks the start button and show the first set of question and answers on the.js-questions-page when the user clicks the start button.
  
  // on click event to check is page is hidden, if not change the class on page to 'hidden', remove the hidden class from page. 
  function showHidePages() {
    $('.js-question-page').hasClass("hidden") ? $('.js-question-page').removeClass("hidden") : $('.js-question-page').addClass("hidden");
    $('.js-start-page').hasClass("hidden") ? $('.js-start-page').removeClass("hidden") : $('.js-start-page').addClass("hidden");
  }
  
  // Function that reads the STORE and passes the proper data to the 2 other functions
  function activateFirstQuestion() {
    let firstQuestionObject = STORE.questions[0];
    let firstQuestion = firstQuestionObject.question;
    let firstAnswers = firstQuestionObject.answers;
  
    setQuestion(firstQuestion);
    setAnswers(firstAnswers);
  }
  
  //When the user clicks the start button it activates the first question page
  $('#start').on('click', function(event) {
    event.preventDefault();
    showHidePages();
    activateFirstQuestion();
    console.log(STORE.currentQuestionIndex, STORE.numberCorrect);
  });
  
  // Show the first question and hide the .js-final-page when the user clicks the try again button and show the first question with the values set back to 0.
  
  // on click event to check is page is hidden, if not change the class on page to 'hidden', remove the hidden class from page. 
  function showHideStart() {
    $('.js-final-page').hasClass("hidden") ? $('.js-final-page').removeClass("hidden") : $('.js-final-page').addClass("hidden");
    $('.js-start-page').hasClass("hidden") ? $('.js-start-page').removeClass("hidden") : $('.js-start-page').addClass("hidden");
  }
  
  // Function that reads the STORE and passes the proper data to the functions
  function resetValues() {
    STORE.currentQuestionIndex = 0;
    STORE.numberCorrect = 0;
    setCurrentQuestionNumber(STORE.currentQuestionIndex + 1);
    setNumberCorrect(STORE.numberCorrect);
    resetCorrectAnswerIs();
  }
  
  //When the user clicks the start button it activates the first question page
  $('#restart-quiz').on('click', function(event) {
    event.preventDefault();
    showHideStart();
    resetValues();
    resetRadioButtons()
  });
  
  // Sets number correct everywhere within the HTML
  function setNumberCorrect(numberCorrect) {
    $('.js-number-correct').text(numberCorrect);
    console.log(numberCorrect);
  }
  
  // Sets "Correct" or "Wrong"
  function setCorrectWrong(correctWrong) {
    $('.js-correct-wrong').text(correctWrong);
  }
  
  // Sets "Correct andswer is "
  function setCorrectAnswerIs(correctAnswer) {
    $('.js-correct-answer-is').html( `- Correct answer is: ${correctAnswer}`);
  }
  
  // Add class to checked radio labels
  function addClassToLabel(color) {
    let checkedRadioLabel = $('label:has(input:radio:checked)');
    checkedRadioLabel.addClass(color);   
  }
  
  // Add class to checked radio labels
  function propDisabled() {
  let uncheckedradioButtons = $('input[type="radio"]:not(:checked)');
  uncheckedradioButtons.prop('disabled', true);
  }
  
  //Find the index of the correct radio button and incorrect radio buttons and validate if the radio button selected is the correct answer or not.
  function findRadioCorrectWrong() {
    
    let index = STORE.currentQuestionIndex;
    let currentQuestionObject = STORE.questions[index];
    let currentAnswers = currentQuestionObject.answers;
    let val = currentQuestionObject.correctAnswerIndex;
    let currentAnswer = currentAnswers[val];
    let correctAnswerNumber = currentQuestionObject.correctAnswerIndex;
    let radioIndex = $(":radio[name='option']:checked").index(":radio[name='option']");
    
    if (radioIndex === correctAnswerNumber) {
      STORE.numberCorrect += 1;
      addClassToLabel("green-highlight");
      propDisabled();
      setNumberCorrect(STORE.numberCorrect);
      setCorrectWrong(' - Correct Answer!');
    } 
    else {
      addClassToLabel("red-highlight");
      propDisabled();
      setCorrectWrong(' - Wrong Answer!');
      setCorrectAnswerIs(currentAnswer);
    }
  }
  
  //onclick radio button function
  $( "input:radio" ).on('click', function(event) {
    findRadioCorrectWrong();
  });
  
  
  // resetValues() not working
  
  
  
  
  
  
  
  
  
  
  
  