const express = require('express');
const bodyParser = require('body-parser')


let app = express();
let PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", (req, res)=>{

})




app.listen(PORT, ()=>{
  console.log("Server started on PORT: ", PORT);
})
