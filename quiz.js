const express = require('express');
const router = express.Router();
const questions = require('../data/questions.json');

// Home route
router.get('/', (req, res) => {
  res.render('index', { questions });
});

// Submit route
router.post('/submit', (req, res) => {
  const userAnswers = req.body;
  let score = 0;

  questions.forEach((question, index) => {
    if (userAnswers[`q${index + 1}`] === question.correctAnswer) {
      score++;
    }
  });

  res.render('result', { score, total: questions.length });
});

module.exports = router;
