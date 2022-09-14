import express from "express";
const app = express();
app.get('/ads', (req, res) => {
    return res.json([
        { id: 1, name: "João Paulo Mazzo", email: "mazzojp@gmail.com" },
        { id: 2, name: "Paulo Mazzo", email: "pmazzo800@gmail.com" },
        { id: 3, name: "Fernanda Mazzo", email: "fernanda_mazzo@gmail.com" }
    ]);
});
app.listen(3333);
