const express = require('express');
const session = require('express-session');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');


let loggedIn = false;


app.use(session({
  secret: 'mySecret',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
    if (req.path !== '/login' && !req.session.loggedIn) {
      res.redirect('/login');
    } else {
      next();
    }
  });
  
app.use((req, res, next) => {

    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    next();
  });
  


app.get('/login', (req, res) => {  
    if(req.session.loggedIn){
  res.redirect('/home' );}
  else{
    const errorMessage = req.query.error;
    res.render('login',{error: errorMessage})
  }
 });

app.post('/login', (req, res) => { 
  const email = req.body.email;
  const password = req.body.password;

  if (email === '123@gmail.com' && password === '123') { 
    req.session.loggedIn = true;
    req.session.user = email;
    res.redirect('/home');

  } else {
    const errorMessage = 'Invalid email or password';
    res.redirect('login?error=' + errorMessage);
  }
 });

app.get('/home', (req, res) => {
  if (req.session.loggedIn) {
    
    res.render('home');
  } else {
    res.redirect('/login');
  }
 });

app.get('/logout', (req, res) => {
  req.session.loggedIn = false;
  req.session.destroy();
  res.redirect('/');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});


