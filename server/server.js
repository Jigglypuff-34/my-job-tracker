const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
dotenv.config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const controller = require('./controller');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../src')));

// note CRUD
app.put('/note/update', controller.noteUpdate, (req, res) => {
	return res.sendStatus(200); 
});

app.delete('/note/delete', controller.noteDelete, (req, res) => {
	return res.sendStatus(200); 
});

// user information
app.post('/login', controller.login, (req, res) => {
  //console.log(req.headers.cookie); 
  return res.sendStatus(200); 
});

app.post('/register', controller.register, (req, res) => {
  console.log('finishing up register in post');
  return res.sendStatus(200); 
});

app.get('/logout', (req, res) => {
  return res.clearCookie('user_id').sendStatus(204); 
});

// Job post information
app.get('/getJobs', controller.getJobs, (req, res) => {
	return res.sendStatus(200);
});

app.post('/add', controller.add, (req, res) => {
  return res.sendStatus(200); 
});

app.put('/update', controller.update, (req, res) => {
  return res.sendStatus(200); 
}); 

app.delete('/delete', controller.delete, (req, res) => {
  return res.sendStatus(200); 
}); 

app.use('*', (req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
