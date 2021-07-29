require("dotenv").config();
let express = require('express');
let app = express();

// ***** ADD LINE BELOW
let journal = require('./controllers/journalcontroller');
let user = require('./controllers/usercontroller');

const sequelize = require('./db');

// ***** NEW CODE START *****
// app.use('/test', function(req, res){
//     res.send('This is a message from the test endpoint on the server!')
// })
// ***** NEW CODE END *****

sequelize.sync();
//sequelize.sync({force: true})
app.use(express.json());

app.use('/user', user);
app.use('/journal', journal);


app.listen(3000, function(){
    console.log('App is listening on port 3000')
})