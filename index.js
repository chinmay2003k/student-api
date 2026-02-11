
const express = require('express');
const app = express();

app.get('/result', (req, res) => {
  res.json({ name: "Chinmay", marks: 85, grade: "A" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
