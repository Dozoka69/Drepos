const circle = document.getElementById("circle")
const progress = document.getElementById("percent")
const currentAmount =  document.getElementById("amount")
const inputFund = document.getElementById("fund")
const addfund = document.getElementById("add")
const goal = 5000
let currentValue = 0


function updateProgress(){
    const percentage = Math.min((currentValue / goal) * 100, 100).toFixed(1)
    circle.style.background = `conic-gradient( #568203 ${percentage}%, #EF0107 0%)`
    progress.textContent = `${Math.floor(percentage)}`
    currentAmount.textContent = `${currentValue}`

}

addfund.addEventListener("click",() =>{
    const fund = parseFloat(inputFund.value)
    if(isNaN(fund) || fund <= 0){
        alert("Invalid fund")
    }else if(fund + currentValue > goal){
        alert(`fund must be less than or equal to ${goal - currentValue}$`)
    }else{
        currentValue = Math.min(currentValue + fund, goal)
        alert("Thanks for your donation.")
        updateProgress()

    }

    if(currentValue === goal){
        alert("Congratulation goal met!")
        addfund.disabled = true
    }

    inputFund.value = ""
      
})

updateProgress()

