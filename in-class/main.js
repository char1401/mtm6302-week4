const $myColors = ["red", "green", "blue", "white", "black", "tomato"]

const $messageList = document.getElementById("color-messages")

// Add what we are assign to the existent content it has
$messageList.innerHTML += `<li>Value on 3rd index is: ${$myColors[3]} </li>` 

// Updating the value at the 4th index of array
$myColors[4] = "cyan"
$messageList.innerHTML += `<li>Value on 4th index is: ${$myColors[4]} </li>` 

// Adding the updated value at the 4th index to the message list
$messageList.innerHTML += `<li> Value on the 4th index </li>`

// Adds darksalmon at the end using push
$myColors.push("darksalmon")
$messageList.innerHTML += `<li> Array values after push method: ${$myColors} </li>`
// Removes darksalmon at the end using pop
$myColors.pop()
$messageList.innerHTML += `<li> Array values after pop method: ${$myColors} </li>`

// Uses unshift to add hotpink to the array and display the message
$myColors.unshift("hotpink")
$messageList.innerHTML += `<li> Array values after unshift method: ${$myColors} </li>`
// Uses shift to remove first item and display the message
$myColors.shift()
$messageList.innerHTML += `<li> Array values after shift method: ${$myColors} </li>`

// Lets try concat...
const $darkColors = ["darkgreen", "darkred", "darkblue"]

const $allColors = $myColors.concat($darkColors)
$messageList.innerHTML += `<li> All colors by array contain: ${$allColors} </li>`

// Finding the colors based on their ids or wtv idk
const $colorResponse = document.getElementById("color-response")

function findColor(name){
    // Look for name in $allColors 
    // If you found it then display "Yes"
    // else then display "No"
    if($allColors.includes(name)){
        $colorResponse.innerHTML = `Yes we have ${name} color`
    }else {
        $colorResponse.innerHTML = `No we do not have ${name} color`
    }
}
findColor("lightgreen")

// i = i + 1 => i++
for (let i = 0; i<5; i++) {
    console.log($allColors[i])
}

console.log($allColors.length)
for (let i = 0; i<$allColors.length; i++) {
    console.log($allColors[i])
}

// Lets work on the boxes
const $colorBoxes = document.getElementById("colored-boxes")

// Loop over the $allColors and a div for each item with background-color
for (const $color of $allColors) {
    $colorBoxes.innerHTML += `<div class="box" style="background-color:${$color}"></div>`
}
