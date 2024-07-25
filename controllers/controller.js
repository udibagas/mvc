const Model = require("../models/model");
const View = require("../views/view");

class Controller {
  static list() {
    const data = Model.readUsers();
    View.showAllUsers(data);
  }

  static register({ firstName, lastName, email, gender, age }) {
    const newUser = Model.createUser({
      firstName,
      lastName,
      email,
      gender,
      age,
    });

    View.successCreateUser(newUser);
  }
}

module.exports = Controller;
