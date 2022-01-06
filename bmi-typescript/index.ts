import express from 'express';
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
import { parseArgs } from './exerciseCalculator';

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;
  if (!weight || !height) {
    throw new Error('Malformatted parameters');
  }

  res.send({
    weight: weight,
    height: height,
    bmi: ''
  });
});

app.post('/exercises', (req, res) => {
  const data = req.body.daily_exercises;
  console.log(data, 'DATA');
  // const value1 = Number(req.query.weight);
  // const value2 = Number(req.query.height);

  const result = parseArgs(data);

  res.send(result);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
