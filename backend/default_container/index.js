import express from "express";

const app = express();
app.get("/", (req, res) => res.send("Omechu API"));
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(3000, () => {
  console.log(`Gateway listening on ${3000}`);
});
