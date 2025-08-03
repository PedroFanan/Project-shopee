import express from 'express';
import Ping from '../models/Ping.js';

const router = express.Router();

router.get('/ping', async (req, res) => {
  const ping = new Ping({ message: 'pong' });
  await ping.save();

  res.json({ message: 'salvo no MongoDB com sucesso!' });
});

export default router;
