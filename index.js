import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items=[];
app.get("/",(req,res)=>{
    res.render("index.ejs",{
        itemsToDo:items,
    });
});
app.get("/work",(req,res)=>{
    res.render("work.ejs");
});
app.post("/",(req,res)=>{
    items.push(req.body["newItem"]);
    res.redirect("/");
    console.log(items);
})
app.listen(port,()=>{
    console.log(`Server is running on port: ${port}.`)
});
 