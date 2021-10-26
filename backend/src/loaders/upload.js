import config from '../config/index.js';
import fs from 'fs';

export default () => {
  const dir = config.upload.path;

  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};
