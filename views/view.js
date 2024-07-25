class View {
  static showAllUsers(users) {
    // ! Logic untuk mengatur tampilan terletak di view
    users = users.map((el) => {
      return {
        ID: el.id,
        Fullname: el.fullName,
        Email: el.email,
        Gender: el.gender,
        Age: el.age,
      };
    });

    console.table(users);
  }

  static successCreateUser(user) {
    console.log(`User ${user.fullName} has been created!`);
  }
}

module.exports = View;
