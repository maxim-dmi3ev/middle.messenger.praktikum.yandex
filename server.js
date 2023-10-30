const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

const indexHtml = fs.readFileSync(path.resolve(__dirname, "dist/index.html"));
app.get("/*", (req, res) => {
    res.end(indexHtml);
});

app.listen(port, () => console.log(`App and running on port: ${port}`));
