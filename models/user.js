"use strict";
const fs = require("fs");

class User {
  #age;

  constructor(id, firstName, lastName, email, gender, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    const title = this.gender == "Male" ? "Mr." : "Mrs.";
    return `${title} ${this.firstName} ${this.lastName}`;
  }

  toJSON() {
    return {
      ...this,
      age: this.#age,
    };
  }

  static readUsers() {
    const data = fs.readFileSync("./data/users.json", "utf-8");
    const parsedData = JSON.parse(data);
    const instanceData = this.createManyUsers(parsedData);
    return instanceData;
  }

  static createNewUser(firstName, lastName, email, gender, age) {
    const users = this.readUsers();
    const lastUser = users.at(-1);
    const lastId = lastUser.id;
    const id = lastId + 1;
    const newUser = new User(id, firstName, lastName, email, gender, age);
    users.push(newUser);
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync("./data/users.json", data);
    return newUser;
  }

  static createManyUsers(data) {
    return data.map((el) => {
      return new User(
        el.id,
        el.firstName,
        el.lastName,
        el.email,
        el.gender,
        el.age
      );
    });
  }
}

module.exports = User;
