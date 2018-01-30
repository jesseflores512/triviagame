var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "In 'Coming to America' what burger was served at McDowells restaraunt?",
  answers: ["Big Mac", "Big Mick", "Jumbo John", "Mr. Juicy"],
  correctAnswer: "Big Mick"
}, {
  question: "In 'Pulp Fiction' what was the name of the TV pilot Mia Wallace was in?",
  answers: ["Sinister Six", "The A-Team", "Dawson's Lake", "Fox Force 5"],
  correctAnswer: "Fox Force 5"
}, {
  question: "In 'Eddie' Which NBA team did Eddie coach?",
  answers: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
  correctAnswer: "New York Knicks"
}, {
  question: "In 'Toy Story' what was the name of the pizza restaraunt Buzz and Woody venture into?",
  answers: ["Space Pizza", "Pizza Port", "Pizza Planet", "Sid's Pizza"],
  correctAnswer: "Pizza Planet"
}, {
  question: "In 'Gladiator' where was Maximus thought to be from before his identity was revealed?",
  answers: ["Spain", "Asia", "Russia", "Rome"],
  correctAnswer: "Spain"
}, {
  question: "In 'Gangs of New York' what district of New York did the movie take place in?",
  answers: ["Brooklyn", "Five Points", "Harlem", "Arlen"],
  correctAnswer: "Five Points"
}, {
  question: "In 'Anchor Man' what cologne does Brian use to seduce Veronica?",
  answers: ["Calvin Klein", "Tiger Piss", "D&G", "Sex Panther"],
  correctAnswer: "Sex Panther"
}, {
  question: "In 'Friday' what does Felica ask to borrow from Smokey?",
  answers: ["his car", "his microwave", "his tv", "his phone"],
  correctAnswer: "his car"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
