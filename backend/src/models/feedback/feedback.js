import { Sequelize, DataTypes } from '../database.js';

const Feedback = Sequelize.define(
  'feedback',
  {
    feedback_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    state: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tester_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'tester',
        key: 'tester_id',
      },
    },
    version_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'version',
        key: 'version_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByFeedbackId(feedback_id) {
  return Feedback.findOne({
    where: { feedback_id },
  });
}

async function create(
  state, //
  tester_id,
  version_id,
) {
  return Feedback.create({
    state, //
    tester_id,
    version_id,
  }).then(data => this.getByFeedbackId(data.dataValues.feedback_id));
}

async function update(
  feedback_id, //
  state,
  tester_id,
  version_id,
) {
  return Feedback.findByPk(feedback_id).then(feedback => {
    feedback.state = state;
    feedback.tester_id = tester_id;
    feedback.version_id = version_id;
    return feedback
      .save()
      .then(data => this.getByFeedbackId(data.dataValues.feedback_id));
  });
}

async function remove(feedback_id) {
  return Feedback.findByPk(feedback_id).then(feedback => feedback.destroy());
}

export default {
  getByFeedbackId,
  create,
  update,
  remove,
};
