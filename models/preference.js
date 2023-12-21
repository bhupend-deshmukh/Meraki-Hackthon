const { Model } = require("objection");
const db = require("../config/db.connections");
Model.knex(db);

class Preference extends Model {
  static get tableName() {
    return "preference";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "user_id",
        "target",
        "specific_target",
        "p_language",
        "framework",
      ],
      properties: {
        id: {
          type: "integer",
        },
        user_id: {
          type: "integer",
        },
        target: {
          type: "string",
        },
        specific_target: {
          type: "string",
        },
        p_language: {
          type: "string",
        },
        framework: {
          type: "string",
        },
      },
    };
  }
}

module.exports = Preference;
