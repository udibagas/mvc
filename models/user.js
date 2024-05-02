"use strict";
const fs = require("fs"); // built in class di nodejs

// 1. abstraksi object
// 2. logic crud
class User {
  constructor(id, firstName, lastName, email, gender, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.age = age;
  }

  static create(id, firstName, lastName, email, gender, age) {
    if (gender == "Male") {
      return new MaleUser(id, firstName, lastName, email, age);
    }

    if (gender == "Female") {
      return new FemaleUser(id, firstName, lastName, email, age);
    }

    throw new Error("Invalid gender");
  }

  static createMany(data) {
    return data.map((user) => {
      const { id, firstName, lastName, email, gender, age } = user;
      return this.create(id, firstName, lastName, email, gender, age);
    });
  }

  static getUsers() {
    const data = fs.readFileSync("./data/users.json", "utf-8");
    const parsedData = JSON.parse(data);
    return User.createMany(parsedData);
  }

  static register(firstName, lastName, email, gender, age) {
    const users = this.getUsers();
    const lastUser = users.at(-1);
    const id = !lastUser ? 1 : lastUser.id + 1;
    const newUser = this.create(id, firstName, lastName, email, gender, age);
    users.push(newUser);
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync("./data/users.json", data);
    return newUser;
  }
}

class MaleUser extends User {
  constructor(id, firstName, lastName, email, age) {
    super(id, firstName, lastName, email, "Male", age);
  }
}

class FemaleUser extends User {
  constructor(id, firstName, lastName, email, age) {
    super(id, firstName, lastName, email, "Female", age);
  }
}

module.exports = User;
