import { Sequelize, DataTypes } from '../database.js';

const VersionImage = Sequelize.define(
  'version_image',
  {
    version_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'version',
        key: 'version_id',
      },
    },
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'image',
        key: 'image_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByVersionId(version_id) {
  return VersionImage.findOne({
    where: { version_id },
  });
}

async function getByImageId(image_id) {
  return VersionImage.findOne({
    where: { image_id },
  });
}

async function create(
  version_id, //
  image_id,
) {
  return VersionImage.create({
    version_id,
    image_id,
  }).then(data =>
    this.getByVersionImageId(
      data.dataValues.version_id,
      data.dataValues.image_id,
    ),
  );
}

async function removeByVersionId(version_id) {
  return VersionImage.destroy({
    where: { version_id },
  });
}

async function removeByImageId(image_id) {
  return VersionImage.destroy({
    where: { image_id },
  });
}

export default {
  getByVersionId,
  getByImageId,
  create,
  removeByImageId,
  removeByVersionId,
};
