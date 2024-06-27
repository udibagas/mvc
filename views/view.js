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

  static showHelp() {
    console.log(`
      Available commands:
      > list (show all users)
      > register firstName lastName email gender age (register new user)
    `);
  }
}

module.exports = View;
