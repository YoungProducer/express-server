import express from 'express';

// Custom imports
import auth from './auth/index';

const router = express.Router();

router.use(auth);

export default router;
