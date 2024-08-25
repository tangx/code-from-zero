
import { log } from 'console';
import * as fs from 'fs';

function readdir(path: string): string[] {
  return fs.readdirSync(path);
}

const dirs = readdir('./');
console.log(dirs);



function IsDir(path: string): boolean {
  return fs.statSync(path).isDirectory();
}

// walk folder with callback
function walkCallBack(path: string, callback: (path: string) => void) {
  console.log("walk with CallBack: ");

  if (IsDir(path)) {
    const dirs = readdir(path);
    dirs.forEach(dir => {
      walkCallBack(path + '/' + dir, callback);
    });
  } else {
    callback(path);
  }
}
walkCallBack('.', (path) => { console.log(path) });


// walk dir, like golang
console.log("walk Simple Mode");
function walk(path: string): void {
  const targets = readdir(path);
  for (const t of targets) {
    const target = path + '/' + t;
    if (IsDir(path + '/' + t)) {
      walk(target);
      continue
    }
    console.log(target);
  }

}
walk('.');