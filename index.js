const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.json());

//-------------------------------

app.use("/todos", require("./routes/todos"));

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});