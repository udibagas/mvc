class View {
  static displayUsers(users) {
    console.table(
      users.map((el) => {
        return {
          ID: el.id,
          Fullname: el.fullName,
          Email: el.email,
          Gender: el.gender,
          Age: el.age,
        };
      })
    );
  }

  static successRegisterUser(newUser) {
    console.log(newUser);
    console.log(`Success register ${newUser.fullName}`);
  }

  static successDeleteUser(deletedUser) {
    console.log(`Success delete ${deletedUser.fullName}`);
  }

  static showHelp() {
    console.log(`
      Available commands:
      > list (show all users)
      > register firstName lastName email gender age (register new user)
      > showUser [id] (show single user based on id)
    `);
  }

  static showSingleUser(user) {
    const { fullName, email, gender, age } = user;
    console.log(`
      Fullname: ${fullName}
      Email: ${email}
      Gender: ${gender}
      Age: ${age}
    `);
  }

  static showError(error) {
    console.log(error.message);
  }
}

module.exports = View;
