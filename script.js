// Questions will be asked
const Questions = [{
    id: 0,
    q: "When was the car invented?",
    a: [{ text: "1849", isCorrect: false },
        { text: "1799", isCorrect: false },
        { text: "1886", isCorrect: true },
        { text: "1767", isCorrect: false }
    ]

},
{
    id: 1,
    q: "when was the plane invented?",
    a: [{ text: "2020", isCorrect: false, isSelected: false },
        { text: "1923", isCorrect: false },
        { text: "1867", isCorrect: false },
        { text: "1903", isCorrect: true }
    ]

},
{
    id: 2,
    q: "How many bones does the human body have?",
    a: [{ text: "41", isCorrect: false },
        { text: "303", isCorrect: false },
        { text: "206", isCorrect: true },
        { text: "289", isCorrect: false }
    ]

}

]

// Set start
var start = true;

// Iterate
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
    op1.style.backgroundColor = "white";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "pink";
    selected = op1.value;
})

// Show selection for op2
op2.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "white";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "pink";
    selected = op2.value;
})

// Show selection for op3
op3.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "white";
    op4.style.backgroundColor = "pink";
    selected = op3.value;
})

// Show selection for op4
op4.addEventListener("click", () => {
    op1.style.backgroundColor = "pink";
    op2.style.backgroundColor = "pink";
    op3.style.backgroundColor = "pink";
    op4.style.backgroundColor = "white";
    selected = op4.value;
})

// Grabbing the evaluate button
const evaluate = document.getElementsByClassName("evaluate");

// Evaluate method
evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "TRUE";
        result[0].style.color = "pink";
    } else {
        result[0].innerHTML = "FALSE";
        result[0].style.color = "pink";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
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
