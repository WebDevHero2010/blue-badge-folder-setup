let express = require("express");
let app = express();
var testController = require('./controllers/testcontroller')

app.use(express.json())
app.use("/test", testController);

let calculatorController = require('./controllers/calculatorcontroller')

app.use('/calculator', calculatorController)
app.listen(3000, function (){
    console.log("App is listening on port 3000")
});