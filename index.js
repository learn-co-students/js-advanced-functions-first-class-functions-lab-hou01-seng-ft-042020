// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => (fare) => fare * int

const fareDoubler = createFareMultiplier(2)
// const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (arr, func) => func(arr)