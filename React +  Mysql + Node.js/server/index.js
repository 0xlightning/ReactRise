const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "root",
    database: "employee_system",
});

app.post('/create', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const age = req.body.age;
    const country = req.body.country;

    db.query(
        "INSERT INTO customer (name, email, age, country) VALUES (?,?,?,?)",
        [name, email, age, country],
        (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send("Values Inserted");
            }
        }
    )

})

app.get('/subcribe', (req, res) => {

    db.query(
        "SELECT * FROM customer" ,(err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.send(result);
            }
        }
    )
})

app.listen(3001, () => {
    console.log("3001 is running");
})