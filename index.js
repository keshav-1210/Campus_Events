import express from "express";
import bodyParser from "body-parser";
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))
var name

app.get("/", (req, res) => {
    res.render("login.ejs")
})
app.post("/home" ,(req, res) => {
   name = req.body["username"]
   
    res.render("home.ejs" , {name})
})
app.get("/home" ,(req, res) => {
    res.render("home.ejs", {name})
})
app.get("/about" ,(req, res) => {
    res.render("about.ejs")
})
app.listen(3000,()=>
{
    console.log(" Listening on port 3000")
})
app.use(bodyParser.urlencoded({ extended: true }));