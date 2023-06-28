import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const port = 8800;

//Set the parameters and connect
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "J65hYpfH%",
  database: "portfolio",
});

//allow to post json with express
app.use(express.json());

//allow cors policy
app.use(cors());

//Homepage
app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

//get Works
app.get("/works", (req, res) => {
  const q = "SELECT * FROM portfolio.work";
  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//get Works by ID
app.get("/works/:id", (req, res) => {
  const workId = req.params.id;
  const q = "SELECT * FROM portfolio.work WHERE id = ?";
  db.query(q, [workId], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//set Works
app.post("/works", (req, res) => {
  const q =
    "INSERT INTO portfolio.work (`title`, `subtitle`, `content`, `year`, `tags`, `category`, `weblink`, `image`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.subtitle,
    req.body.content,
    req.body.year,
    req.body.tags,
    req.body.category,
    req.body.weblink,
    req.body.image,
  ];
  //console.log(q, values);

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    res.send("POSTED");
  });
});

//delete work
app.delete("/works/:id", (req, res) => {
  const workId = req.params.id;
  const q = "DELETE FROM portfolio.work WHERE id = ?";

  db.query(q, [workId], (err, data) => {
    if (err) return res.json(err);
    res.send("DELETED !");
  });
});

//update work
app.put("/works/:id", (req, res) => {
  const workId = req.params.id;
  const q =
    "UPDATE portfolio.work SET `title` = ?, `subtitle` = ?, `content` = ?, `year` = ?, `tags` = ?, `category` = ?, `weblink` = ?, `image` = ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.subtitle,
    req.body.content,
    req.body.year,
    req.body.tags,
    req.body.category,
    req.body.weblink,
    req.body.image,
  ];
  db.query(q, [...values, workId], (err, data) => {
    if (err) return res.json(err);
    res.send("UPDATED !");
  });
});

app.listen(port, () => {
  console.log("Connected to backend server 1!");
});
