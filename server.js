import express from "express";
import pg from "pg";
import env from "dotenv";
import bcrypt from "bcryptjs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
const saltcrypt = 10;


app.use(cors());
env.config();

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "music_users",
    password: "Vettie321!#",
    port: "5432",
});
db.connect();

//app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.json());

app.post("/register", async (req, res) => {
    const { email, password, confirm_password } = req.body;

    console.log(email, password, confirm_password);

    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length > 0) {
            console.log("Email already exists");
            return res.status(400).send("Email already exists");
        }

        if (password === confirm_password) {
            bcrypt.hash(password, saltcrypt, async (err, hash) => {
                if (err) {
                    console.log("Unable to hash password");
                    return res.status(500).send("Unable to hash password");
                }

                try {
                    await db.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hash]);
                    res.redirect("/login");
                } catch (err) {
                    console.error("Error inserting user:", err);
                    return res.status(500).send("Unable to register");
                }
            });
        } else {
            return res.status(400).send("Passwords do not match");
        }
    } catch (err) {
        console.error("Error checking email:", err);
        return res.status(500).send("Unable to register");
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length === 0) {
          console.log("User not found");
            return res.status(400).send("User not found");
        }

        const user = result.rows[0];
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                console.error("Error comparing passwords:", err);
                return res.status(500).send("Unable to login");
            }

            if (result) {
                console.log("Correct password");
                return res.json({loggedin: true});
            } else {
                console.log("Wrong password");
                return res.status(400).send("Incorrect password");
            }
        });
    } catch (err) {
        console.error("Error logging in:", err);
        return res.status(500).send("Unable to login");
    }
});


app.listen(port, () => {
    console.log(`Running on port: ${port}`);
});

