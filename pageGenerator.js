const fs = require('fs');
const ejs = require('ejs');

let aboutTemplate = fs.readFileSync('src/views/about.ejs', 'utf8')
let about = ejs.render(aboutTemplate, {
  filename: __dirname + '/src/views/about.ejs',
});
fs.writeFileSync("build/about.html", about, 'utf8');


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


let lifeExpectancyTotal = [];
let tle_csv = fs.readFileSync('data/totalLifeExpectancy.csv', 'utf8');
let tle = dbc_csv.split("\n");

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
