import { Sequelize, DataTypes } from '../database.js';

const Team = Sequelize.define(
  'team',
  {
    team_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    introduce: {
      type: DataTypes.TEXT,
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
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByTeamId(team_id) {
  return Team.findOne({
    where: { team_id },
  });
}

async function create(
  name, //
  introduce,
  image_id,
) {
  return Team.create({
    name,
    introduce,
    image_id,
  }).then(data => this.getByTeamId(data.dataValues.team_id));
}

async function update(
  team_id, //
  name,
  introduce,
  image_id,
) {
  return Team.findByPk(team_id).then(team => {
    team.name = name;
    team.introduce = introduce;
    team.image_id = image_id;
    return team.save().then(data => this.getByTeamId(data.dataValues.team_id));
  });
}

async function remove(team_id) {
  return Team.findByPk(team_id).then(team => team.destroy());
}

export default {
  getByTeamId,
  create,
  update,
  remove,
};
