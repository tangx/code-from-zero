import * as fs from 'fs';


function readAllContent(filename: string) {

  const data = fs.readFileSync(filename, 'utf8')
  console.log(data);

}

readAllContent('README.md');


