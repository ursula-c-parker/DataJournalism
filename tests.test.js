const tests = require("./tests")

let deathsByCause = "./deathsByCause.json"
let lifeExpectancyTotal = "./lifeExpectancyTotal.json"
let lifeExpectancyF = "./lifeExpectancyF.json"
let lifeExpectancyM = "./lifeExpectancyM.json"

test('No missing tables in cause' () => ) {
  for (int i=0; i<deathsByCause.length; i++) {
    expect(deathsByCause[i]).not.toBe("")
  }
}

test('No missing tables in LET' () => ) {
  for (int i=0; i<lifeExpectancyTotal.length; i++) {
    expect(lifeExpectancyTotal[i]).not.toBe("")
  }
}

test('No missing tables in LEF' () => ) {
  for (int i=0; i<lifeExpectancyF.length; i++) {
    expect(lifeExpectancyF[i]).not.toBe("")
  }
}

test('No missing tables in LEM' () => ) {
  for (int i=0; i<lifeExpectancyM.length; i++) {
    expect(lifeExpectancyM[i]).not.toBe("")
  }
}

test('right number of countries in cause' () =>) {
  expect(deathsByCause.length).toBe(195)
}

test('right number of countries in LET' () =>) {
  expect(lifeExpectancyTotal.length).toBe(195)
}

test('right number of countries in LEF' () =>) {
  expect(lifeExpectancyF.length).toBe(195)
}

test('right number of countries in LEM' () =>) {
  expect(lifeExpectancyM.length).toBe(195)
}
