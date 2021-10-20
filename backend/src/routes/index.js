import { Router } from 'express';

import ProviderRouter from './user/provider.js';

export default () => {
  const router = Router();

  router.use('/providers', ProviderRouter);

  return router;
};
