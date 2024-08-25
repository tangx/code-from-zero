import { log } from 'console';
import * as fs from 'fs';


function readAllContent(filename: string) {

  const data = fs.readFileSync(filename, 'utf8')
  console.log(data);

}

readAllContent('README.md');



function readContentLineByLine(filename: string) {
  console.log('## Reading file line by line');

  const data = fs.readFileSync(filename, 'utf8')
  const lines = data.split('\n')
  lines.forEach((line, index) => {

    // console.log("index", index);

    console.log(index, line);
  })

}


readContentLineByLine('README.md');