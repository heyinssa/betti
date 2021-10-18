import { Sequelize, DataTypes } from '../database.js';

const Tester = Sequelize.define(
  'tester',
  {
    tester_id: {
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
      allowNull: false,
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

async function getByTesterId(test_id) {
  return Tester.findOne({
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
  return Tester.create({
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  }).then(data => this.getByTesterId(data.dataValues.test_id));
}

async function update(
  test_id, //
  id,
  password,
  birth,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  return Tester.findByPk(test_id).then(tester => {
    tester.id = id;
    tester.password = password;
    tester.birth = birth;
    tester.nickname = nickname;
    tester.iamge_id = image_id;
    tester.oauth_token = oauth_token;
    tester.access_token = access_token;
    return tester
      .save()
      .then(data => this.getByTesterId(data.dataValues.test_id));
  });
}

async function remove(test_id) {
  return Tester.findByPk(test_id).ten(tester => tester.destroy());
}

export default {
  getByTesterId,
  create,
  update,
  remove,
};
