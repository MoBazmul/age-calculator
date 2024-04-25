// Variables Declaration and Function Definitions

const days = document.querySelector("#date")
const month = document.querySelector("#month")
const year = document.querySelector("#year")
const btn = document.querySelector(".sep")

const art1 = document.querySelector(".article1")
const art2 = document.querySelector(".article2")
const art3 = document.querySelector(".article3")
const answers = document.querySelectorAll(".answer")

const labels = document.querySelectorAll("label")

const errDate = document.getElementById("errDate")
const errMonth = document.getElementById("errMonth")
const errYear = document.getElementById("errYear")

const dashes = document.querySelectorAll(".dash")

const dateOfBirth = new Date()
const today = new Date()

function hideDashes() {
    for(dash of dashes) {
        dash.style.display = 'none'
    }
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}

function calculateAge(birthDate, currentDate) {
    var birthDateObj = new Date(birthDate);
    var currentDateObj = currentDate ? new Date(currentDate) : new Date();

    var timeDifference = Math.abs(currentDateObj.getTime() - birthDateObj.getTime());

    var yearsDifference = Math.floor(timeDifference / (1000 * 3600 * 24 * 365.25));
    var remainingMilliseconds = timeDifference - (yearsDifference * (1000 * 3600 * 24 * 365.25));
    var daysDifference = Math.floor(remainingMilliseconds / (1000 * 3600 * 24));

    var monthsDifference = Math.floor(daysDifference / 30.44); // Approximate number of days in a month
    var age = {
        years: yearsDifference,
        months: monthsDifference,
        days: daysDifference
    };

    return age;
}

// End of Variables Declaration and Function Definitions

const lastDay = new Date(year.value, month.value - 1, daysInMonth(month.value - 1, year.value)).getDate();

btn.addEventListener('click', () => {
    const newDate = year.value + '-' + month.value + '-' + days.value
    const results = calculateAge(newDate)
    const outDays = results.days.toString()
    const outMonths = results.months.toString()
    const outYears = results.years.toString()

    if(Number(year.value) > today.getFullYear()) {
        labels[2].style.color = 'hsl(0, 100%, 67%)'
        year.style.border = '1px solid hsl(0, 100%, 67%)'
        errYear.style.display = 'block'
    } else {
        labels[2].style.color = 'hsl(0, 1%, 44%)'
        year.style.border = '1px solid hsl(0, 0%, 86%)'
        errYear.style.display = 'none'

        hideDashes()

        answers[0].innerText = outYears
        answers[0].style.color = 'hsl(259, 100%, 65%)'
    }
    if(Number(month.value) > 12) {
        labels[1].style.color = 'hsl(0, 100%, 67%)'
        month.style.border = '1px solid hsl(0, 100%, 67%)'
        errMonth.style.display = 'block'
    } else {
        labels[1].style.color = 'hsl(0, 1%, 44%)'
        month.style.border = '1px solid hsl(0, 0%, 86%)'
        errMonth.style.display = 'none'

        hideDashes()

        answers[1].innerText = outMonths
        answers[1].style.color = 'hsl(259, 100%, 65%)'
    }
    if(Number(days.value) > lastDay) {
        labels[0].style.color = 'hsl(0, 100%, 67%)'
        days.style.border = '1px solid hsl(0, 100%, 67%)'
        errDate.style.display = 'block'
    } else {
        labels[0].style.color = 'hsl(0, 1%, 44%)'
        days.style.border = '1px solid hsl(0, 0%, 86%)'
        errDate.style.display = 'none'

        hideDashes()

        answers[2].innerText = outDays
        answers[2].style.color = 'hsl(259, 100%, 65%)'
    }
})






