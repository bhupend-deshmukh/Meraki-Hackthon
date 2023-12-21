const { Model } = require("objection");
const db = require("../config/db.connections");
Model.knex(db);

// use joi

class Users extends Model {
  static get tableName() {
    return "users";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["name", "email", "password"],
      properties: {
        id: {
          type: "integer",
        },
        name: {
          type: "string",
        //   required: true,
        },
        email: {
          type: "string",
        //   required: true,
        },
        password: {
          type: "string",
        //   required: true,
        },
      },
    };
  }
}

module.exports = Users;
