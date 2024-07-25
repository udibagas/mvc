const fs = require("fs");
const UserFactory = require("./user");

// ! semua data yang keluar dari model harus berupa instance!!!
class Model {
  static readUsers() {
    const data = fs.readFileSync("./data/users.json", "utf-8"); // data mentah
    const parsedData = JSON.parse(data); // data setengah mateng
    const instances = UserFactory.createUsers(parsedData); // data mateng
    return instances;
  }

  static createUser({ firstName, lastName, email, gender, age }) {
    const allUsers = this.readUsers();

    // let id = 1;

    // if (allUsers.length > 0) {
    //   id = allUsers.at(-1).id + 1;
    // }

    // ternary operation
    const id = allUsers.length > 0 ? allUsers.at(-1).id + 1 : 1;

    const newUser = UserFactory.createUser({
      id,
      firstName,
      lastName,
      email,
      gender,
      age,
    });

    allUsers.push(newUser);
    const string = JSON.stringify(allUsers, null, 2);
    fs.writeFileSync("./data/userss.json", string);
    return newUser;
  }
}

module.exports = Model;
