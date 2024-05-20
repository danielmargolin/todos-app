import express from "express";
import mongoose from "mongoose";

import todosRoute from "./routes/todos.routes.js"
import usersRoute from "./routes/users.routes.js"
const app = express();

app.use(express.static("public"));
app.use(express.json());

//-------------------------------

app.use("/todos", todosRoute);
app.use("/users", usersRoute);

app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    const connectToDb = () => {
        mongoose.connect('mongodb+srv://margolin23:nYbjAMqvAGBtsmdZ@cluster1.3slcbul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1').then(() => {
            console.log('connected to mongo')
        })
    }
    connectToDb();
    console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://margolin23:nYbjAMqvAGBtsmdZ@cluster1.3slcbul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1