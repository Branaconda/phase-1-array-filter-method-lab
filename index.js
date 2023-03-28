// Code your solution here
function findMatching (drivers, names) {
    const findDrivers = drivers.filter(driver => driver.toLowerCase() === names.toLowerCase())
    return findDrivers
}

const fuzzyMatch = (drivers, names) => drivers.filter(driver => driver[0] === names[0])

const matchName = (driver, name) => driver.filter(driver => driver.name === name)