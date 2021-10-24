import { Sequelize, DataTypes } from '../database.js';

const Element = Sequelize.define(
  'element',
  {
    element_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    apply_state: {
      type: DataTypes.INTEGER,
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
    feedback_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: 'feedback',
        key: 'feedback_id',
      },
    },
  },
  {
    freezeTableName: true,
    underscored: true,
  },
);

async function getByElementId(element_id) {
  return Element.findOne({
    where: { element_id },
  });
}

async function getByFeedbackId(feedback_id) {
  return Element.find({
    where: { feedback_id },
  });
}

async function create(
  content, //
  apply_state,
  image_id,
  feedback_id,
) {
  return Element.create({
    content,
    apply_state,
    image_id,
    feedback_id,
  }).then(data => this.getByElementId(data.dataValues.element_id));
}

async function update(
  element_id, //
  content,
  apply_state,
  image_id,
  feedback_id,
) {
  return Element.findByPk(element_id).then(element => {
    element.element_id = element_id;
    element.content = content;
    element.apply_state = apply_state;
    element.image_id = image_id;
    element.feedback_id = feedback_id;
    return element
      .save()
      .then(data => this.getByElementId(data.dataValues.element_id));
  });
}

async function remove(element_id) {
  return Element.findByPk(element_id).then(element => element.destroy());
}

export default {
  getByElementId,
  getByFeedbackId,
  create,
  update,
  remove,
};
