// typing animation

const text = [
"Junior Software Developer",
"Building Intelligent Web Applications",
]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]

letter = currentText.slice(0, ++index)

document.querySelector(".typing").textContent = letter

if(letter.length === currentText.length){

count++
index = 0

setTimeout(type,1500)

}else{

setTimeout(type,70)

}

}

type()



// AI assistant

function ask(){

let q = document.getElementById("question").value.toLowerCase()

let answer = document.getElementById("answer")

if(q.includes("skills")){
answer.innerText="I specialize in HTML, CSS, JavaScript, responsive design, APIs and building interactive web applications."
}

else if(q.includes("projects")){
answer.innerText="My most notable project is a Smart Loadshedding Intelligence App designed to help users track power outages."
}

else if(q.includes("learn")){
answer.innerText="I learned programming through projects, online resources and continuous practice."
}

else if(q.includes("certificates")){
answer.innerText="I possess multiple certifications through different websites. If you are looking for my certifications , you can find them on my LinkedIn profile but they have most likely increased. "    
}

else if(q.includes("joke")){
answer.innerText=" I was only joking. You really came here to search for a joke... your actions are funny ."
}

else if (q.includes("inspiration")){
answer.innerText="I come from a hard upbringing but I had serveral people in my life (most importantly my mother) who pushed me to become great in life . Software brings my creativity to light as it allows me to create worlds that people will get to interact with . I want to be the best in the business while being a role model to thoses who struggle in life and want to push their dreams . No Matter The Challenge."    
}

else if (q.includes("dream")){
answer.innerText="I come from a hard upbringing but I had serveral people in my life (most importantly my mother) who pushed me to become great in life . Software brings my creativity to light as it allows me to create worlds that people will get to interact with . I want to be the best in the business while being a role model to thoses who struggle in life and want to push their dreams . No Matter The Challenge."    
}

else{
answer.innerText="Sorry Mr/Miss curious , you have sadly out smarted a machine. Maybe you're the AI here. Contact Mr Mofokeng for more information."
}

}