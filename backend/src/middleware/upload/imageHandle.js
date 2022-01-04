import upload from './uploadHandle.js';
import config from '../../config/index.js';

export const uploadImage = field => {
  return [
    upload.single(field),
    (req, res, next) => {
      if (!req.file) {
        req.image = undefined;
        return next();
      }

      const image = {
        file_name: req.file.originalname,
        file_path: config.upload.path + '/' + req.file.filename,
        file_type: req.file.mimetype,
        file_size: req.file.size,
      };
      console.log(image);
      req.image = image;
      return next();
    },
  ];
};

export const uploadRequiredImage = field => {
  return [
    upload.single(field),
    (req, res, next) => {
      const image = {
        file_name: req.file.originalname,
        file_path: config.upload.path + '/' + req.file.filename,
        file_type: req.file.mimetype,
        file_size: req.file.size,
      };
      req.image = image;
      next();
    },
  ];
};
