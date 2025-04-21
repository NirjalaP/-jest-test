// index.js
const express = require("express");
const axios = require("axios");
const app = express();

const PORT = 3000;

app.use(express.json());

const todos = [
    { id: 1, name: "Clean the house" },
    { id: 2, name: "Get pizza for dinner" },
    { id: 3, name: "Do homework" }
];

// Route to get all todos
app.get("/todo", (req, res) => {
    res.status(200).json(todos);
});

// Route to get todo by ID
app.get("/todo/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        res.status(200).json(todo);
    } else {
        res.status(404).json({ message: "Todo not found" });
    }
});

// Route to get Chuck Norris joke
app.get("/joke", async (req, res) => {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        res.send(response.data);
    } catch (err) {
        res.status(500).send({ error: "Failed to fetch joke" });
    }
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Listening on port => ${PORT}`);
    });
}

module.exports = app;
