const express = require("express");

const app = express();

app.use(express.json());

let latestDonation = null;

app.post("/webhook", (req, res) => {

    latestDonation = {
        id: Date.now(),
        name: req.body.name || "Anonim",
        amount: req.body.amount || 0,
        message: req.body.message || ""
    };

    console.log(latestDonation);

    res.status(200).json({
        success: true
    });
});

app.get("/latest-donation", (req, res) => {
    res.json(latestDonation || {});
});

app.get("/", (req, res) => {
    res.send("Server Bagibagi Roblox Aktif");
});
app.get("/test-donation", (req, res) => {

    latestDonation = {
        id: Date.now(),
        name: "Tester",
        amount: 10000,
        message: "Ini donasi percobaan"
    };

    res.json(latestDonation);
});
app.listen(process.env.PORT || 3000);
