// routes/github.ts
import express from 'express';
import { getSessionStatus } from '../controllers/generateController';

const router = express.Router();
router.get('/:sessionId', getSessionStatus);

export default router;
