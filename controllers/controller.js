const User = require("../models/user");
const View = require("../views/view");

class Controller {
  static showUsers() {
    const users = User.readUsers();
    View.displayUsers(users);
  }

  static register(firstName, lastName, email, gender, age) {
    const newUser = User.createNewUser(firstName, lastName, email, gender, age);
    View.successRegisterUser(newUser);
  }

  static showHelp() {
    View.showHelp();
  }
}

module.exports = Controller;
