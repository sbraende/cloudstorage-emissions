let pollutionKg = 0 
let distanceKm = 0
let earthCircumference = 40075 //km

let Co2KgEl = document.getElementById("Co2-tons")
let distanceEl = document.getElementById("distance")
let earthEl = document.getElementById("earthCircumference")
let numbersOnlyErrorEl = document.getElementById("numbersOnly")

let petrolCarPollution = 0.170 // 0.17kg/170g pollution per km 

function Calculate() {
    let storageEl = document.getElementById("storage-input")
    let onlineStorageFloat = parseFloat(storageEl.value)

    if (isNaN(onlineStorageFloat)) {
        numbersOnlyErrorEl.textContent = "Please only use numbers"
        return
    } else {
        numbersOnlyErrorEl.textContent = ""
    }

    pollutionKg = storageEl.value * 2 // Formula for Co2 generated per GB
    Co2KgEl.textContent = pollutionKg

    distanceKm = pollutionKg / petrolCarPollution
    distanceEl.textContent = Math.floor(distanceKm)

    timesAroundEarth = distanceKm / earthCircumference
    earthEl.textContent = timesAroundEarth
}


// Event listerners

let storageEl = document.getElementById("storage-input")
storageEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        Calculate()
    }
})
