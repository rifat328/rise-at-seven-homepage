const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('package.json','utf8'));
delete pkg['lint-staged'];
delete pkg.scripts['lint-staged'];
delete pkg.devDependencies['lint-staged'];
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('cleaned package.json');
