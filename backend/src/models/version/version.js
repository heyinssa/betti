import { Sequelize, DataTypes } from '../database.js';

const Version = Sequelize.define(
  'version',
  {
    version_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    introduce: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    platform: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    max_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    team_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'team',
        key: 'team_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByVersionId(version_id) {
  return Version.findOne({
    where: { version_id },
  });
}

async function create(
  introduce, //
  link,
  platform,
  start_date,
  end_date,
  max_number,
  team_id,
) {
  return Version.create({
    introduce, //
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  }).then(data => this.getByVersionId(data.dataValues.id));
}

async function update(
  version_id,
  introduce,
  link,
  platform,
  start_date,
  end_date,
  max_number,
  team_id,
) {
  return Version.findByPk(version_id).then(version => {
    version.introduce = introduce;
    version.link = link;
    version.platform = platform;
    version.start_date = start_date;
    version.end_date = end_date;
    version.max_number = max_number;
    version.team_id = team_id;
    return version
      .save()
      .then(data => this.getByVersionId(data.dataValues.version_id));
  });
}

async function remove(version_id) {
  return Version.findByPk(version_id).then(provider => provider.destroy());
}

export default {
  getByVersionId,
  create,
  update,
  remove,
};
