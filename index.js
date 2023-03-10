const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const path =  require("path")
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "frontend")));

app.use("/openai", require("./routes/openaiRoutes"));
app.listen(port, () => console.log(`Server running on port ${port}`));




