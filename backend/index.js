import express from "express";
import mysql from "mysql";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ourportfolio",
  });


app.get("/",(req,res)=>{
    res.json("hello there i am backend")
  })

  app.get("/portfolio", (req, res) => {
    const q = "SELECT * FROM portfolio";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.post("/portfolio", (req, res) => {
    const q = "INSERT INTO portfolio(`id`,'Name', `Email`, `Message`) VALUES (?)";
  
    const values = [
      req.body.Name,
      req.body.Email,
      req.body.Message,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json("message send");
    });
  });
  
  
  

app.listen(3000, () =>{
    console.log("connected to a backend")
})