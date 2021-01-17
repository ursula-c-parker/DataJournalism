const causeData = require("../data/deathsByCause.json")
const femaleData = require("../data/lifeExpectancyFemale.json")
const maleData = require("../data/lifeExpectancyMale.json")
const totalData = require("../data/lifeExpectancyTotal.json")
let countryNum = 178

test('No missing tables in cause', () => {
  for (let i = 0; i < causeData.length; i++) {
    expect(causeData[i]).not.toBe("");
  }
});

test('No missing tables in LET', () => {
  for (let i = 0; i < totalData.length; i++) {
    expect(totalData[i]).not.toBe("");
  }
});

test('No missing tables in LEF', () => {
  for (let i = 0; i < femaleData.length; i++) {
    expect(femaleData[i]).not.toBe("");
  }
});

test('No missing tables in LEM', () => {
  for (let i = 0; i < maleData.length; i++) {
    expect(maleData[i]).not.toBe("");
  }
});


test('No stray commas in total life expectancy numbers', () => {
  for (let i = 0; i < totalData.length; i++) {
    for (entry in totalData[i]) {
      for (let pos of totalData[i][entry]) {
        let str = pos.toString();
        for (let j = 0; j < str.length; j++)
          expect(str[j]).not.toBe(",");
      }
    }
  }
});

test('No stray commas in male life expectancy numbers', () => {
  for (let i = 0; i < maleData.length; i++) {
    for (entry in maleData[i]) {
      for (let pos of maleData[i][entry]) {
        let str = pos.toString();
        for (let j = 0; j < str.length; j++)
          expect(str[j]).not.toBe(",");
      }
    }
  }
});

test('No stray commas in total female expectancy numbers', () => {
  for (let i = 0; i < femaleData.length; i++) {
    for (entry in femaleData[i]) {
      for (let pos of femaleData[i][entry]) {
        let str = pos.toString();
        for (let j = 0; j < str.length; j++)
          expect(str[j]).not.toBe(",");
      }
    }
  }
});

test('right number of countries in LET', () => {
  expect(totalData.length).toBe(countryNum);
});

test('right number of countries in LEF', () => {
  expect(femaleData.length).toBe(countryNum);
});

test('right number of countries in LEM', () => {
  expect(maleData.length).toBe(countryNum);
});
