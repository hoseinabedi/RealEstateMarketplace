import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    }, 200);
});

export default router;