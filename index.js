// const express = require('express');
// const path = require('path');

// const app = express();
// const port = 3000;

// // Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Serve static files (optional, e.g. CSS/JS/images)
// app.use(express.static(path.join(__dirname, 'public')));

// // Route to render EJS template
// app.get('/', (req, res) => {
//   res.render('index', {
//     title: 'Welcome to EJS Page',
//     message: 'This is coming from the server using EJS!'
//   });
// });

// // Route to serve static index.html
// app.get('/html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to render the EJS file
app.get('/', (req, res) => {
  res.render('index', {
    title: 'My Dynamic EJS Page',
    message: 'This content is rendered using EJS from index.js!'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
