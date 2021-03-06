const fs = require('fs');
const ejs = require('ejs');

let aboutTemplate = fs.readFileSync('src/views/about.ejs', 'utf8')
let about = ejs.render(aboutTemplate, {
  filename: __dirname + '/src/views/about.ejs',
});
fs.writeFileSync("build/about.html", about, 'utf8');

let macroviewTemplate = fs.readFileSync('src/views/macroview.ejs', 'utf8')
let macroview = ejs.render(macroviewTemplate, {
  filename: __dirname + '/src/views/macroview.ejs',
});
fs.writeFileSync("build/macroview.html", macroview, 'utf8');

//blogs
let data = fs.readFileSync('data/lifeExpectancyTotal.json', 'utf8');
let microviewTemplate = fs.readFileSync('src/views/microview.ejs', 'utf8');
var microview = JSON.parse(data)

//console.log(microview)

for (let i=1; i<microview.length; i++) {
  let country = microview[i]

  let countryName = country["country"]
  let name = "build/" + countryName.split(" ").join("_") + ".html"

  let page = ejs.render(microviewTemplate, {
    filename: __dirname + '/src/views/microview.ejs',
    data: country,
    countries: microview,
    index: i
  });

  fs.writeFileSync(name, page, 'utf8');
}

//cause of death
let deathsByCause = [];
let dbc_csv = fs.readFileSync('data/deathsByCause.csv', 'utf8');
let dbc = dbc_csv.split("\n");

dbc.forEach(function(cause) {
  let dbc_info = cause.split(',');
  let deathObj = {};
  deathObj['country'] = dbc_info[0];
  deathObj['code'] = dbc_info[1];
  deathObj['year'] = dbc_info[2];
  deathObj['executions'] = dbc_info[3];
  deathObj['roadInjuries'] = dbc_info[4];
  deathObj['liverDiseases'] = dbc_info[5];
  deathObj['digestiveDiseases'] = dbc_info[6];
  deathObj['tuberculosis'] = dbc_info[7];
  deathObj['hiv'] = dbc_info[8];
  deathObj['diarrhealDiseases'] = dbc_info[9];
  deathObj['intestinalDiseases'] = dbc_info[10];
  deathObj['lowerRespiratoryInfections'] = dbc_info[11];
  deathObj['meningitis'] = dbc_info[12];
  deathObj['drowning'] = dbc_info[13];
  deathObj['dementias'] = dbc_info[14];
  deathObj['parkinson'] = dbc_info[15];
  deathObj['alcoholism'] = dbc_info[16];
  deathObj['drugs'] = dbc_info[17];
  deathObj['malaria'] = dbc_info[18];
  deathObj['maternalDisorders'] = dbc_info[19];
  deathObj['neonatalDisorders'] = dbc_info[20];
  deathObj['malnutrition'] = dbc_info[21];
  deathObj['diabetes'] = dbc_info[22];
  deathObj['kidneyDisease'] = dbc_info[23];
  deathObj['respiratoryDiseases'] = dbc_info[24];
  deathObj['conflict'] = dbc_info[25];
  deathObj['hepatitis'] = dbc_info[26];
  deathObj['neoplasms'] = dbc_info[27];
  deathObj['fires'] = dbc_info[28];
  deathObj['poison'] = dbc_info[29];
  deathObj['exposure'] = dbc_info[30];
  deathObj['temperature'] = dbc_info[31];
  deathObj['protienDeficiency'] = dbc_info[32];
  deathObj['cardiovascularDiseases'] = dbc_info[33];
  deathObj['selfHarm'] = dbc_info[34];
  deathObj['domesticViolence'] = dbc_info[35];
  deathObj['terrorism'] = dbc_info[36];

  deathsByCause.push(deathObj);
});

fs.writeFileSync('data/deathsByCause.json', JSON.stringify(deathsByCause), 'utf8');


//life expectancy total
let lifeExpectancyTotal = [];
let tle_csv = fs.readFileSync('data/totalLifeExpectancy.csv', 'utf8');
let tle = tle_csv.split("\n");

tle.forEach(function(le) {
  let tle_info = le.split(',');
  let tleObj = {};
  tleObj['country'] = tle_info[0];
  tleObj['code'] = tle_info[1];
  tleObj['1960'] = tle_info[4];
  tleObj['1961'] = tle_info[5];
  tleObj['1962'] = tle_info[6];
  tleObj['1963'] = tle_info[7];
  tleObj['1964'] = tle_info[8];
  tleObj['1965'] = tle_info[9];
  tleObj['1966'] = tle_info[10];
  tleObj['1967'] = tle_info[11];
  tleObj['1968'] = tle_info[12];
  tleObj['1969'] = tle_info[13];
  tleObj['1970'] = tle_info[14];
  tleObj['1971'] = tle_info[15];
  tleObj['1972'] = tle_info[16];
  tleObj['1973'] = tle_info[17];
  tleObj['1974'] = tle_info[18];
  tleObj['1975'] = tle_info[19];
  tleObj['1976'] = tle_info[20];
  tleObj['1977'] = tle_info[21];
  tleObj['1978'] = tle_info[22];
  tleObj['1979'] = tle_info[23];
  tleObj['1980'] = tle_info[24];
  tleObj['1981'] = tle_info[25];
  tleObj['1982'] = tle_info[26];
  tleObj['1983'] = tle_info[27];
  tleObj['1984'] = tle_info[28];
  tleObj['1985'] = tle_info[29];
  tleObj['1986'] = tle_info[30];
  tleObj['1987'] = tle_info[31];
  tleObj['1988'] = tle_info[32];
  tleObj['1989'] = tle_info[33];
  tleObj['1990'] = tle_info[34];
  tleObj['1991'] = tle_info[35];
  tleObj['1992'] = tle_info[36];
  tleObj['1993'] = tle_info[37];
  tleObj['1994'] = tle_info[38];
  tleObj['1995'] = tle_info[39];
  tleObj['1996'] = tle_info[40];
  tleObj['1997'] = tle_info[41];
  tleObj['1998'] = tle_info[42];
  tleObj['1999'] = tle_info[43];
  tleObj['2000'] = tle_info[44];
  tleObj['2001'] = tle_info[45];
  tleObj['2002'] = tle_info[46];
  tleObj['2003'] = tle_info[47];
  tleObj['2004'] = tle_info[48];
  tleObj['2005'] = tle_info[49];
  tleObj['2006'] = tle_info[50];
  tleObj['2007'] = tle_info[51];
  tleObj['2008'] = tle_info[52];
  tleObj['2009'] = tle_info[53];
  tleObj['2010'] = tle_info[54];
  tleObj['2011'] = tle_info[55];
  tleObj['2012'] = tle_info[56];
  tleObj['2013'] = tle_info[57];
  tleObj['2014'] = tle_info[58];
  tleObj['2015'] = tle_info[59];
  tleObj['2016'] = tle_info[60];
  tleObj['2017'] = tle_info[61];
  tleObj['2018'] = tle_info[62];

  lifeExpectancyTotal.push(tleObj);
});

fs.writeFileSync('data/lifeExpectancyTotal.json', JSON.stringify(lifeExpectancyTotal), 'utf8');


//life expectancy female
let lifeExpectancyFemale = [];
let fle_csv = fs.readFileSync('data/lifeExpectancyFemale.csv', 'utf8');
let fle = fle_csv.split("\n");

fle.forEach(function(le) {
  let fle_info = le.split(',');
  let fleObj = {};
  fleObj['country'] = fle_info[0];
  fleObj['code'] = fle_info[1];
  fleObj['1960'] = fle_info[4];
  fleObj['1961'] = fle_info[5];
  fleObj['1962'] = fle_info[6];
  fleObj['1963'] = fle_info[7];
  fleObj['1964'] = fle_info[8];
  fleObj['1965'] = fle_info[9];
  fleObj['1966'] = fle_info[10];
  fleObj['1967'] = fle_info[11];
  fleObj['1968'] = fle_info[12];
  fleObj['1969'] = fle_info[13];
  fleObj['1970'] = fle_info[14];
  fleObj['1971'] = fle_info[15];
  fleObj['1972'] = fle_info[16];
  fleObj['1973'] = fle_info[17];
  fleObj['1974'] = fle_info[18];
  fleObj['1975'] = fle_info[19];
  fleObj['1976'] = fle_info[20];
  fleObj['1977'] = fle_info[21];
  fleObj['1978'] = fle_info[22];
  fleObj['1979'] = fle_info[23];
  fleObj['1980'] = fle_info[24];
  fleObj['1981'] = fle_info[25];
  fleObj['1982'] = fle_info[26];
  fleObj['1983'] = fle_info[27];
  fleObj['1984'] = fle_info[28];
  fleObj['1985'] = fle_info[29];
  fleObj['1986'] = fle_info[30];
  fleObj['1987'] = fle_info[31];
  fleObj['1988'] = fle_info[32];
  fleObj['1989'] = fle_info[33];
  fleObj['1990'] = fle_info[34];
  fleObj['1991'] = fle_info[35];
  fleObj['1992'] = fle_info[36];
  fleObj['1993'] = fle_info[37];
  fleObj['1994'] = fle_info[38];
  fleObj['1995'] = fle_info[39];
  fleObj['1996'] = fle_info[40];
  fleObj['1997'] = fle_info[41];
  fleObj['1998'] = fle_info[42];
  fleObj['1999'] = fle_info[43];
  fleObj['2000'] = fle_info[44];
  fleObj['2001'] = fle_info[45];
  fleObj['2002'] = fle_info[46];
  fleObj['2003'] = fle_info[47];
  fleObj['2004'] = fle_info[48];
  fleObj['2005'] = fle_info[49];
  fleObj['2006'] = fle_info[50];
  fleObj['2007'] = fle_info[51];
  fleObj['2008'] = fle_info[52];
  fleObj['2009'] = fle_info[53];
  fleObj['2010'] = fle_info[54];
  fleObj['2011'] = fle_info[55];
  fleObj['2012'] = fle_info[56];
  fleObj['2013'] = fle_info[57];
  fleObj['2014'] = fle_info[58];
  fleObj['2015'] = fle_info[59];
  fleObj['2016'] = fle_info[60];
  fleObj['2017'] = fle_info[61];
  fleObj['2018'] = fle_info[62];

  lifeExpectancyFemale.push(fleObj);
});

fs.writeFileSync('data/lifeExpectancyFemale.json', JSON.stringify(lifeExpectancyFemale), 'utf8');


//life expectancy male
let lifeExpectancyMale = [];
let mle_csv = fs.readFileSync('data/lifeExpectancyMale.csv', 'utf8');
let mle = mle_csv.split("\n");

mle.forEach(function(le) {
  let mle_info = le.split(',');
  let mleObj = {};
  mleObj['country'] = mle_info[0];
  mleObj['code'] = mle_info[1];
  mleObj['1960'] = mle_info[4];
  mleObj['1961'] = mle_info[5];
  mleObj['1962'] = mle_info[6];
  mleObj['1963'] = mle_info[7];
  mleObj['1964'] = mle_info[8];
  mleObj['1965'] = mle_info[9];
  mleObj['1966'] = mle_info[10];
  mleObj['1967'] = mle_info[11];
  mleObj['1968'] = mle_info[12];
  mleObj['1969'] = mle_info[13];
  mleObj['1970'] = mle_info[14];
  mleObj['1971'] = mle_info[15];
  mleObj['1972'] = mle_info[16];
  mleObj['1973'] = mle_info[17];
  mleObj['1974'] = mle_info[18];
  mleObj['1975'] = mle_info[19];
  mleObj['1976'] = mle_info[20];
  mleObj['1977'] = mle_info[21];
  mleObj['1978'] = mle_info[22];
  mleObj['1979'] = mle_info[23];
  mleObj['1980'] = mle_info[24];
  mleObj['1981'] = mle_info[25];
  mleObj['1982'] = mle_info[26];
  mleObj['1983'] = mle_info[27];
  mleObj['1984'] = mle_info[28];
  mleObj['1985'] = mle_info[29];
  mleObj['1986'] = mle_info[30];
  mleObj['1987'] = mle_info[31];
  mleObj['1988'] = mle_info[32];
  mleObj['1989'] = mle_info[33];
  mleObj['1990'] = mle_info[34];
  mleObj['1991'] = mle_info[35];
  mleObj['1992'] = mle_info[36];
  mleObj['1993'] = mle_info[37];
  mleObj['1994'] = mle_info[38];
  mleObj['1995'] = mle_info[39];
  mleObj['1996'] = mle_info[40];
  mleObj['1997'] = mle_info[41];
  mleObj['1998'] = mle_info[42];
  mleObj['1999'] = mle_info[43];
  mleObj['2000'] = mle_info[44];
  mleObj['2001'] = mle_info[45];
  mleObj['2002'] = mle_info[46];
  mleObj['2003'] = mle_info[47];
  mleObj['2004'] = mle_info[48];
  mleObj['2005'] = mle_info[49];
  mleObj['2006'] = mle_info[50];
  mleObj['2007'] = mle_info[51];
  mleObj['2008'] = mle_info[52];
  mleObj['2009'] = mle_info[53];
  mleObj['2010'] = mle_info[54];
  mleObj['2011'] = mle_info[55];
  mleObj['2012'] = mle_info[56];
  mleObj['2013'] = mle_info[57];
  mleObj['2014'] = mle_info[58];
  mleObj['2015'] = mle_info[59];
  mleObj['2016'] = mle_info[60];
  mleObj['2017'] = mle_info[61];
  mleObj['2018'] = mle_info[62];

  lifeExpectancyMale.push(mleObj);
});

fs.writeFileSync('data/lifeExpectancyMale.json', JSON.stringify(lifeExpectancyMale), 'utf8');
