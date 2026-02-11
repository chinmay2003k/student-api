
const request = require('supertest');
const express = require('express');

const app = express();
app.get('/result', (req, res) => {
  res.json({ name: "Chinmay", marks: 85, grade: "A" });
});

test('GET /result', async () => {
  const res = await request(app).get('/result');
  expect(res.statusCode).toBe(200);
  expect(res.body.grade).toBe("A");
});
