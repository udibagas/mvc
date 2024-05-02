"use strict";

const User = require("../models/user");
const View = require("../views");

class Controller {
  static help() {
    View.showHelp();
  }

  static list() {
    const users = User.getUsers();
    View.showAllUsers(users);
  }

  static register(firstName, lastName, email, gender, age) {
    const newUser = User.register(firstName, lastName, email, gender, age);
    View.showUser(newUser);
  }
}

module.exports = Controller;
