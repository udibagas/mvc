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

  static readUsersAsyncCallback(cb) {
    fs.readFile("./data/users.json", "utf-8", (err, data) => {
      if (err) {
        cb(err);
      } else {
        const parsedData = JSON.parse(data);
        const instanceData = this.createManyUsers(parsedData);
        cb(null, instanceData);
      }
    });
  }

  // ! di model ga perlu catch
  static readUsersAsyncPromise() {
    return fs.promises.readFile("./data/users.json", "utf-8").then((data) => {
      const parsedData = JSON.parse(data);
      const instanceData = this.createManyUsers(parsedData);
      return instanceData;
    });
  }

  static async readUsersAsyncAwait() {
    const data = await fs.promises.readFile("./data/users.json", "utf-8");
    const parsedData = JSON.parse(data);
    const instanceData = this.createManyUsers(parsedData);
    return instanceData;
  }

  static createNewUser(firstName, lastName, email, gender, age) {
    const users = this.readUsers();
    const id = users.length > 0 ? users.at(-1).id + 1 : 1;
    const newUser = new User(id, firstName, lastName, email, gender, age);
    users.push(newUser);
    const data = JSON.stringify(users, null, 2);
    fs.writeFileSync("./data/users.json", data);
    return newUser;
  }

  static async createNewUserAync(firstName, lastName, email, gender, age) {
    const users = await this.readUsersAsyncAwait();
    const id = users.length > 0 ? users.at(-1).id + 1 : 1;
    const newUser = new User(id, firstName, lastName, email, gender, age);
    users.push(newUser);
    const data = JSON.stringify(users, null, 2);
    await fs.promises.writeFile("./data/users.json", data);
    return newUser;
  }

  static async getUserById(id) {
    const users = await this.readUsersAsyncAwait();
    const user = users.find((el) => el.id == id);

    if (!user) {
      throw new Error(`User with id ${id} is not found`);
    }

    return user;
  }

  // static async deleteUserById(id) {
  //   const users = await this.readUsersAsyncAwait();
  //   const deletedUser = users.find((el) => el.id == id);

  //   if (!deletedUser) {
  //     throw new Error(`User with id ${id} is not found`);
  //   }

  //   const filteredUsers = users.filter((el) => el.id !== id);
  //   const data = JSON.stringify(filteredUsers, null, 2);
  //   await fs.promises.writeFile("./data/users.json", data);
  //   return deletedUser;
  // }

  static async deleteUserById(id) {
    const users = await this.readUsersAsyncAwait();
    const indexUser = users.findIndex((el) => el.id == id);

    if (indexUser == -1) {
      throw new Error(`User with id ${id} is not found`);
    }

    const deletedUser = users.splice(indexUser, 1);
    const data = JSON.stringify(users, null, 2);
    await fs.promises.writeFile("./data/users.json", data);
    return deletedUser[0];
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
