import multer from 'multer';
import config from '../../config/index.js';

/**
 * TODO: fileFilter 추가하기
 */
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, config.upload.path);
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export default upload;
