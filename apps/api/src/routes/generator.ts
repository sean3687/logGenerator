// routes/github.ts
import express from 'express';
import { handleGenerateChangelog } from '../controllers/generateController';

const router = express.Router();
router.post('/changelog', handleGenerateChangelog);

export default router;
