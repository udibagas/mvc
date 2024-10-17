const User = require("../models/user");
const View = require("../views/view");

class Controller {
  static getAllUsers() {
    const users = User.getAllUsers();
    View.showAllUsers(users);
  }

  static register(firstName, lastName, email, gender, age) {
    const newUser = User.register(firstName, lastName, email, gender, age);
    View.successRegister(newUser);
  }

  static help() {
    View.showHelp();
  }
}

module.exports = Controller;
