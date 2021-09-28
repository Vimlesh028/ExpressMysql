const express= require("express")
const path =require("path")
const bodyparser = require("body-parser");
const session=require("express-session")
const {v4:uuidv4} =require("uuid")
const app = express();


const router=require("./router")
const port= process.env.PORT ||3000;

app.set('view engine','ejs')
// parse requests of content-type: application/json
app.use(bodyparser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: true }));

//load static assets
app.use(express.static('public'))
app.use(express.static('public/assets'))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(session({
  secret:uuidv4(),
  resave:false,
saveUninitialized:true}))

app.use('/route',router)

// simple route home
app.get("/", (req, res) => {
//   res.json({ message: "Welcome to express application." });
res.render('base',  {titl:"Login System"})
});

// set port, listen for requests
app.listen(port, () => {
  console.log("Server is running on port 3000.");
});