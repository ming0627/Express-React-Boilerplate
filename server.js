const express = require("express");

const app = express();
const port = 4567;

app.get("/", (req, res) =>{
        res.send("hello");
});

app.listen(port, () =>{
        console.log(`Server is up on port ${port}`);
})