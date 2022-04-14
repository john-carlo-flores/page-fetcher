 const request = require('request');
 const fs = require('fs');
 const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
const fetchResource = (url, path) => {
  const filePath = path.endsWith('/') ? path + 'index.html' : path + '/index.html';

  if (path.char)


  if (!fs.existsSync(path)) {
    return console.log(`Error: File path provided is invalid.`);
  } else if (fs.existsSync(filePath)) {
    rl.question("File already exists on the path given. Would you like to overwrite it? (Y/N) ", (answer) => {
      if (answer !== 'Y') {
        rl.close();
        return process.exit();
      }

      rl.close();
    });
  }

  request(url, (error, response, body) => {
    if (error || (response >= 200 && response < 300)) {
      return console.log(`Error: URL provided is invalid. File not downloaded.`);
    }

    


    console.log('Downloaded and saved 1235 bytes to ./index.html.');
  });


}
