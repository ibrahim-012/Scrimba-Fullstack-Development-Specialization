/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputNum = document.getElementById("input-num")
const btnConvert = document.getElementById("btn-convert")
const conversionLength = document.getElementById("conversion-length")
const conversionVolume = document.getElementById("conversion-volume")
const conversionMass = document.getElementById("conversion-mass")

let number = 0
let metersToFeet = 0
let feetToMeters = 0
let litersToGallons = 0
let gallonsToLiters = 0
let kilogramsToPounds = 0
let poundsToKilograms = 0

inputNum.addEventListener("change", function(){
    number = inputNum.value
    metersToFeet = Number(number * 3.281).toFixed(3)
    feetToMeters = Number(number / 3.281).toFixed(3)
    
    litersToGallons = Number(number * 0.264).toFixed(3)
    gallonsToLiters = Number(number / 0.264).toFixed(3)
    
    kilogramsToPounds = Number(number * 2.204).toFixed(3)
    poundsToKilograms = Number(number / 2.204).toFixed(3)
})

btnConvert.addEventListener("click", function(){
    conversionLength.textContent = `${number} meters = ${metersToFeet} feet | ${number} feet = ${feetToMeters} meters`

    conversionVolume.textContent = `${number} liters = ${litersToGallons} gallons | ${number} gallons = ${gallonsToLiters} liters`

    conversionMass.textContent = `${number} kilos = ${kilogramsToPounds} pounds | ${number} pounds = ${poundsToKilograms} kilos`
})
