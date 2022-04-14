const request = require('request');
const fs = require('fs');
const prompt = require('prompt-sync')();
  
const downloadURL = (url, path) => {
  const filePath = path.endsWith('/') ? path + 'index.html' : path + '/index.html';

  if (!fs.existsSync(path)) {
    return console.log(`Error: File path provided is invalid.`);
  } 

  if (fs.existsSync(filePath)) {
    const answer = prompt("File already exists on the path given. Would you like to overwrite it? (Y/N) ");
    if (answer !== 'Y') return process.exit();
  }

  request(url, (error, response, body) => {
    if (error) {
      return console.log(`Error: URL provided is invalid\n. ${error}.`);
    }

    if (response < 200 || response >= 300) {
      return console.log(console.log('statusCode:', response && response.statusCode));
    }

    fs.writeFile(filePath, body, err => {
      if (err) return console.log(err);
    });

    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`)
  });
};

downloadURL(process.argv[2], process.argv[3]);
