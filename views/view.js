class View {
  static showAllUsers(users) {
    console.table(users);
  }

  static successRegister(newUser) {
    console.log("Register success!");
    console.log(`User ${newUser.firstName} has been registered`);
  }

  static showHelp() {
    console.log("List of available commands:");
    console.log("node app.js list");
    console.log(
      "node app.js register <firstName> <lastName> <email> <gender> <age>"
    );
  }
}

module.exports = View;
