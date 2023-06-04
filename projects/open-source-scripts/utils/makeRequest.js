// const makeRequest = function (url) {
//   // return new pending promise
//   return new Promise((resolve, reject) => {
//     // select http or https module, depending on reqested url
//     const lib = url.startsWith('https') ? require('https') : require('http');
//    // rejectUnauthorized: false,

//     const request = lib.get(url, (response) => {
//       // handle http errors
//       if (response.statusCode < 200 || response.statusCode > 299) {
//         reject(new Error('Failed to load page, status code: ' + response.statusCode));
//       }
//       // temporary data holder
//       const body = [];
//       // on every content chunk, push it to the data array
//       response.on('data', (chunk) => body.push(chunk));
//       // we are done, resolve promise with those joined chunks
//       response.on('end', () => resolve(body.join('')));
//     });
//     // handle connection errors of the request
//     request.on('error', (err) => reject(err))
//   }).catch(err => console.log('Error occured', err))
// };

import https from 'https';
import axios from 'axios';

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

async function makeRequest(url){
  instance.get(url);

  // At request level
  const agent = new https.Agent({  
    rejectUnauthorized: false
  });
  
  const promise = axios.get(url, { httpsAgent: agent });
  const dataPromise = promise.then((response) => response.data);
  return dataPromise;
}

export default makeRequest;