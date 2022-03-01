let myMessages=[]
//Hey
const saveBtn = document.getElementById("save-btn")
let inputEl = document.getElementById("input-el")
console.log(inputEl)
let olEl = document.getElementById("ol-el")
console.log(olEl)
const clearBtn = document.getElementById("clear-btn")
console.log(clearBtn)

let myItems=JSON.parse(localStorage.getItem("myMessages"))

if(myItems){
    myMessages = myItems
    render()
}

clearBtn.addEventListener("click", function(){
    console.log("button clicked")
    localStorage.clear()
    myMessages=[]
    render()
})
//on clicking submit button, push new value to the array
//and clear the input field
saveBtn.addEventListener("click", function(){
    console.log("button clicked")
    myMessages.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myMessages", JSON.stringify(myMessages))
    render()
})


function render(items){
let listItems=""
//looping through the array before rendering the items
for(let i = 0; i < myMessages.length; i++){
    listItems += `<li>${myMessages[i]}</li>`
}
olEl.innerHTML = listItems
}






