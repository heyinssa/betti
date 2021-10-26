import upload from './uploadHandle.js';

export const uploadImage = field => {
  return [
    upload.single(field),
    (req, res, next) => {
      const image = {
        file_name: req.file.originalname,
        file_path: req.file.filename,
        file_type: req.file.mimetype,
        file_size: req.file.size,
      };
      req.image = image;
      next();
    },
  ];
};
