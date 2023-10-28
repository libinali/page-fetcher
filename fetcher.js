const url = process.argv[2];
const localFile = process.argv[3];
const fs = require('fs');
const request = require('request');



const fetcher = function(url, localFile) {
  request(url, (error, response, data) => {
    
    if (error) {
      console.log('error:', error);
    }

    if (response.statusCode === 200) {
      fs.writeFile(localFile, data, () => {
        const fileSize = Buffer.byteLength(data);
        console.log(`Downloaded and saved ${fileSize} to ${localFile}`);
      });
    }

  });
};

if (url && localFile) {
  fetcher(url, localFile);
}
