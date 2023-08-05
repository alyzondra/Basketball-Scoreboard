// import {defineConfig} from 'vite'


// export default defineConfig({
// 	plugins: []	
// })

//initial number
let count = 0

//variable for score
let scoreH = document.getElementById("score-h")

// apply the variable back to score
scoreH.textContent = count

//implent changes back to H2 when clicking the button
function add1() {
	count += 1
	scoreH.textContent = count
}

