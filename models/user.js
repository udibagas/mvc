const fs = require("fs");

//! Logic CRUD
//! Semua data yang keluar dari model harus berupa instance dari class yg sesuai
class User {
  constructor(id, firstName, lastName, email, gender, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.age = age;
  }

  static getAllUsers() {
    const data = fs.readFileSync("./data/users.json", "utf-8");
    const parsedData = JSON.parse(data); // data setengah mateng

    const users = parsedData.map((el) => {
      return new User(
        el.id,
        el.firstName,
        el.lastName,
        el.email,
        el.gender,
        el.age
      );
    });

    return users;
  }

  static register(firstName, lastName, email, gender, age) {
    const users = this.getAllUsers();
    const id = users.at(-1).id + 1;
    const newUser = new User(id, firstName, lastName, email, gender, age);
    users.push(newUser);
    fs.writeFileSync("./data/users.json", JSON.stringify(users, null, 2));
    return newUser;
  }
}

module.exports = User;
