"use strict";

class View {
  static showAllUsers(users) {
    console.table(users);
  }

  static showUser(user) {
    console.log(`User ${user.firstName} successfully registered!`);
  }

  static showHelp() {
    console.log("Perintah:");
    console.log("> node app.js list");
    console.log("> node app.js register firstName lastName email gender age");
  }
}

module.exports = View;
