import { Sequelize, DataTypes } from '../database.js';

const Image = Sequelize.define(
  'image',
  {
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    width: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file_size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByImageId(image_id) {
  return Image.findOne({
    where: { image_id },
  });
}

async function create(
  width, //
  height,
  file_size,
  file_name,
  file_type,
  file_path,
) {
  return Image.create({
    width, //
    height,
    file_size,
    file_name,
    file_type,
    file_path,
  }).then(data => this.getByImageId(data.dataValues.image_id));
}

async function update(
  image_id, //
  width,
  height,
  file_size,
  file_name,
  file_type,
  file_path,
) {
  return Image.findByPk(image_id).then(image => {
    image.image_id = image_id;
    image.width = width;
    image.height = height;
    image.file_size = file_size;
    image.file_name = file_name;
    image.file_type = file_type;
    image.file_path = file_path;
    return image
      .save()
      .then(data => this.getByImageId(data.dataValues.image_id));
  });
}

async function remove(image_id) {
  return Image.findByPk(image_id).then(image => image.destroy());
}

export default {
  getByImageId,
  create,
  update,
  remove,
};
