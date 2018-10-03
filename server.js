// const express = require('express');
// const app = express();
// const path = require('path');

// // Env variables
// const PORT = process.env.PORT || 4000;
// const HOST = process.env.HOST || '0.0.0.0';
// const API_HOST = process.env.API_HOST || HOST;
// const API_PORT = process.env.API_PORT || 8080;

// // Serve only the static files form the build directory
// app.use(express.static(__dirname + '/build'));

// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, './build/index.html'));
// });

// // Start the app by listening on port 4000
// app.listen(PORT);
// console.log(`Node server running on port ${PORT}`);

// /**
//  * Error message
//  */
// function internalServerError(err, req, res) {
//   res.status(500).json({
//     error: {
//       code: 'wfm_security_003',
//       message: 'Internal server error'
//     }
//   });
// }

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);
