import express from 'express';
import restfull from '../../utils/restfull';

const uuid = require('uuid/v4');
const router = express.Router();

router.get(
    '/signin',
    async (req, res, next) => {
        // const { username, password } = req.body;
        const hash = uuid();
        res.status(200);
        res.send({
            hash
        });
        res.end();
    }
)

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