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
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    file_size: {
      type: DataTypes.INTEGER,
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
  file_name, //
  file_path,
  file_type,
  file_size,
) {
  return Image.create({
    file_name, //
    file_path,
    file_type,
    file_size,
  }).then(data => this.getByImageId(data.dataValues.image_id));
}

async function update(
  image_id, //
  file_name,
  file_path,
  file_type,
  file_size,
) {
  return Image.findByPk(image_id).then(image => {
    image.image_id = image_id;
    image.file_name = file_name;
    image.file_path = file_path;
    image.file_type = file_type;
    image.file_size = file_size;
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
