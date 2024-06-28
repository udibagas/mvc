const User = require("../models/user");
const View = require("../views/view");

class Controller {
  static async showUsers() {
    // ! Sync
    // const users = User.readUsers();
    // View.displayUsers(users);
    // ! callback
    // User.readUsersAsyncCallback((err, users) => {
    //   if (err) {
    //     View.showError(err);
    //   } else {
    //     View.displayUsers(users);
    //   }
    // });
    // ! Promise
    // User.readUsersAsyncAwait()
    //   .then((users) => {
    //     View.displayUsers(users);
    //   })
    //   .catch((err) => {
    //     View.showError(err);
    //   });
    // ! async await
    try {
      const users = await User.readUsersAsyncAwait();
      View.displayUsers(users);
    } catch (err) {
      View.showError(err);
    }
  }

  static async register(firstName, lastName, email, gender, age) {
    // const newUser = User.createNewUser(firstName, lastName, email, gender, age);
    // View.successRegisterUser(newUser);

    try {
      const newUser = await User.createNewUserAync(
        firstName,
        lastName,
        email,
        gender,
        age
      );
      View.successRegisterUser(newUser);
    } catch (err) {
      View.showError(err);
    }
  }

  static async showUser(id) {
    try {
      const user = await User.getUserById(id);
      View.showSingleUser(user);
    } catch (error) {
      View.showError(error);
    }
  }

  static async deleteUser(id) {
    try {
      const deletedUser = await User.deleteUserById(id);
      View.successDeleteUser(deletedUser);
    } catch (error) {
      View.showError(error);
    }
  }

  static showHelp() {
    View.showHelp();
  }
}

module.exports = Controller;
