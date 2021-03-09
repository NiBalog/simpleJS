
// Just check to see that we found the div element we are looking for
myDiv = document.getElementById("myDiv");
console.log("my div: " + myDiv);
avg = 0
oldavg = 0
// Click event to attach to button
function myClick () {
  // Quick check to verify that the function executes.
  console.log("test function");
  // Get the values that were input into the two text boxes.
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;

  console.log(fname, lname);
  // By using = we *replace* the entire contents of the div tag.
  myDiv.innerHTML = "\n";
  // Now, using += we are *appending* to the new contents of the div tag.
  myDiv.innerHTML += "\t\t<h1>Whoa.</h1>\n"
  // Notice mixing of quotation marks, just like in Python.
  myDiv.innerHTML += "\t\t<img src='default.png' />\n";
  // Notice here that we are appending the values of the variables.
  myDiv.innerHTML += "\t\t<p>" + fname + " " + lname + "</p>\n";
}
function answerCheck() {
  var answer11 = document.getElementById('q1a1').checked
  var answer12 = document.getElementById('q1a2').checked
  var answer13 = document.getElementById('q1a3').checked
  var answer14 = document.getElementById('q1a4').checked

  var answer21 = document.getElementById('q2a1').checked
  var answer22 = document.getElementById('q2a2').checked
  var answer23 = document.getElementById('q2a3').checked
  var answer24 = document.getElementById('q2a4').checked

  var answer31 = document.getElementById('q3a1').checked
  var answer32 = document.getElementById('q3a2').checked
  var answer33 = document.getElementById('q3a3').checked
  var answer34 = document.getElementById('q3a4').checked

  var answer41 = document.getElementById('q4a1').checked
  var answer42 = document.getElementById('q4a2').checked

  var question1 = document.getElementById('q1a2').checked
  var question2 = document.getElementById('q2a3').checked
  var question3 = document.getElementById('q3a1').checked
  var question4 = document.getElementById('q4a1').checked

  myJSON = {
    "questionOne": question1,
    "questionTwo": question2,
    "questionThree": question3,
    "questionFour": question4,
  }

  if(localStorage.getItem('attempts') == null) {
  localStorage.setItem('attempts', '[]');
  }
  var oldJSON = JSON.parse(localStorage.getItem("attempts"));

  for (i = 0; i < oldJSON.length; i++) {
    console.log(oldJSON[i].questionOne)
    console.log(oldJSON[i].questionTwo)
    console.log(oldJSON[i].questionThree)
    console.log(oldJSON[i].questionFour)

    if (oldJSON[i].questionOne) {
      oldavg += 1
    }
    if (oldJSON[i].questionTwo) {
      oldavg += 1
    }
    if (oldJSON[i].questionThree) {
      oldavg += 1
    }
    if (oldJSON[i].questionFour) {
      oldavg += 1
    }


  }
  console.log(oldavg)
  oldavg = Math.round((oldavg/(4*oldJSON.length)) * 100) + "%"
  oldJSON.push(myJSON)

  var oldJSONstr = JSON.stringify(oldJSON)
  localStorage.setItem("attempts",oldJSONstr);

  if (question1) {
    avg += 1
  }
  if (question2) {
    avg += 1
  }
  if (question3) {
    avg += 1
  }
  if (question4) {
    avg += 1
  }

  avg = avg/4 * 100 + "%"

  console.log(avg)

  myDiv.innerHTML = "\n";

  if (answer12) {
    myDiv.innerHTML += "\t\t<h1>Good Job! you got the answer to question 1 right!</h1>\n"
  }
  else {
    myDiv.innerHTML += "\t\t<h1>Unlucky. That was the wrong answer to question 1.</h1>\n"
  }


  if (answer23) {
    myDiv.innerHTML += "\t\t<h1>Good Job! you got the answer to question 2 right!</h1>\n"
  }
  else {
    myDiv.innerHTML += "\t\t<h1>Unlucky. That was the wrong answer to question 2.</h1>\n"
  }

  if (answer31) {
    myDiv.innerHTML += "\t\t<h1>Good Job! you got the answer to question 3 right!</h1>\n"
  }
  else {
    myDiv.innerHTML += "\t\t<h1>Unlucky. That was the wrong answer to question 3.</h1>\n"
  }

  if (answer41) {
    myDiv.innerHTML += "\t\t<h1>Good Job! you got the answer to question 4 right!</h1>\n"
  }
  else {
    myDiv.innerHTML += "\t\t<h1>Unlucky. That was the wrong answer to question 4.</h1>\n"
  }
  myDiv.innerHTML += "\t\t You got " + avg + " of the answers correct. \n"

  myDiv.innerHTML += "\t\t Over your previous attempts you averaged " + oldavg + " of the answers correct\n"
}
