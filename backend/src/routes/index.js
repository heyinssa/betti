import { Router } from 'express';

import UserRouter from './user/user.js';

export default () => { 
    const router = Router();

    router.use('/user', UserRouter);

    return router
};