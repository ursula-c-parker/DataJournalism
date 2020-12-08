const fs = require('fs');
const ejs = require('ejs');

let aboutTemplate = fs.readFileSync('views/about.ejs', 'utf8')
let about = ejs.render(aboutTemplate, {
  filename: __dirname + '/views/about.ejs',
});
fs.writeFileSync("build/about.html", about, 'utf8');
