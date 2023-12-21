const Users = require("../models/users");

class UserService {
  async SignUp({ name, email, password }) {
    // console.log(name, email, password, "ooooooooooo");
    try {
      console.log("yes is workignd,mg,gfdnfdngfjkfhkgjkjn");
      const exists_user = await Users.query().where({ email });
      if (exists_user.length > 0) {
        return {
          status: false,
          message: "user already exists",
          data: exists_user,
        };
      }
      const user = await Users.query().insert({
        name,
        email,
        password,
      });
      return { status: true, message: "user created successfully", data: user };
    } catch (error) {
      console.log(error);
      return { status: false, message: error.message };
    }
  }

  async Login({ email, password }) {
    try {
      const user = await Users.query().where({ email, password });
      if (user.length > 0) {
        return { status: true, message: "user logged in successfully" };
      }
      return { status: false, message: "user not found" };
    } catch (error) {
      return { status: false, message: error.message };
    }
  }

  async DeleteUser(id) {
    try {
      const exists_user = await Users.query().findById(id);
      const user = await Users.query().deleteById(id);
      if (user) {
        return {
          status: true,
          message: "user deleted successfully",
          data: exists_user,
        };
      }
      return { status: false, message: "user not found" };
    } catch (error) {
      return { status: false, message: error.message };
    }
  }
}

module.exports = UserService;
