import { Sequelize, DataTypes } from '../database.js';

const User = Sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birth: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      references: {
        model: 'image',
        key: 'image_id',
      },
    },
    oauth_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByUserId(test_id) {
  return User.findOne({
    where: { test_id },
  });
}

async function create(
  id, //
  password,
  birth,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  return User.create({
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  }).then(data => this.getByUserId(data.dataValues.test_id));
}

async function update(
  user_id, //
  id,
  password,
  birth,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  return User.findByPk(user_id).then(user => {
    user.id = id;
    user.password = password;
    user.birth = birth;
    user.nickname = nickname;
    user.iamge_id = image_id;
    user.oauth_token = oauth_token;
    user.access_token = access_token;
    return user
      .save()
      .then(data => this.getByUserId(data.dataValues.test_id));
  });
}

async function remove(test_id) {
  return User.findByPk(test_id).ten(user => user.destroy());
}

export default {
  getByUserId,
  create,
  update,
  remove,
};
