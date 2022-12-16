let date1 = document.querySelector('#date1')
let date2 = document.getElementById('date2')
let result = document.getElementById('result')
let dates = [0,0]

let onDateInput = (index) => {
    return (event) => {

        dates[index] = event.target.value

        output = (Number(new Date(dates[0])) - Number(new Date(dates[1]))) /1000/60/60/24
        if (dates[0] && dates[1] != '') {
            result.innerText = output
        }
    }
}

date1.addEventListener('input',onDateInput(0))
date2.addEventListener('input',onDateInput(1))