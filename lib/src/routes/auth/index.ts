import express from 'express';
// import restfull from '../../utils/restfull';

const uuid = require('uuid/v4');
const router = express.Router();

router.post(
    '/auth/signup',
    async (req, res, next) => {
        const { username, password } = req.body;
        const hash = uuid();
        res.status(200);
        res.send({
            hash,
        });
        res.end();
    },
);

router.post(
    '/auth/signin',
    async (req, res, next) => {

    },
);

// router.all(
//     '/signin',
//     restfull({
//         get: async (req, res, next) => {
//             // const { username, password } = req.body;
//             const hash = uuid();
//             res.status(200);
//             res.send({
//                 hash
//             });
//             res.end();
//         }
//     })
// );

export default router;
