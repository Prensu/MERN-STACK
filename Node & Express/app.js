const express = require('express');
const morgan = require('morgan'); // Require Morgan
const app = express();
const dbConnection=require('./config/db');
const userModel= require('./models/user');

app.use(express.json())
app.use(express.urlencoded({extended:true}))  //built in middlewares
app.use(express.static("public"))

app.set('view engine', 'ejs');



// Routes
app.get('/', (req, res) => {
    res.render("index"); 
});

app.get('/about', (req, res) => {
  
});

app.get('/profile', (req, res) => {
    
});

app.get('/register', (req, res) => {
    res.render('register');
    
});

app.get('/user-find', (req, res) => {
    userModel.find()
        .then((users) => {
            res.status(200).send(users); // Send the users data with a 200 OK status
        })
        .catch((err) => {
            res.status(500).send({ error: 'An error occurred while fetching users' }); // Handle any errors
        });
});

app.post('/register',async(req,res) =>
{       
    const {username,email,password} = req.body

    await userModel.create({
        username:username,
        email:email,
        password:password
    })

    res.send('data received')

})




app.post('/get-form-details', (req, res) => {
    console.log(req.body)
    res.send("Data received!")
});

app.listen(3000);