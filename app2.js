const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello from app2!");
});

app.listen(port, () => {
    console.log("Hello from app2");
    console.log(`App1 listening at http://localhost:${port}`);
});
