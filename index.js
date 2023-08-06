
//initial number
let count = 0
let count2 = 0

//variable for score
let scoreH = document.getElementById("score-h")
let scoreG = document.getElementById("score-g")

// apply the variable back to score
scoreH.textContent = count
scoreG.textContent = count2

//implent changes back to H2 when clicking the button
function add1() {
	count += 1
	scoreH.textContent = count
}

function add2() {
	count += 2
	scoreH.textContent = count
}

function add3() {
	count += 3
	scoreH.textContent = count
}

function add1g() {
	count2 += 1
	scoreG.textContent = count2
}

function add2g() {
	count2 += 2
	scoreG.textContent = count2
}

function add3g() {
	count2 += 3
	scoreG.textContent = count2
}

function ResetH() {
	count = 0
	scoreH.textContent = count
}

function ResetG() {
	count2 = 0
	scoreG.textContent = count2
}

