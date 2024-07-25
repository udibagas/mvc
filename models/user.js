class User {
  constructor(id, firstName, lastName, email, gender, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.gender = gender;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class UserFactory {
  static createUsers(data) {
    return data.map((el) => this.createUser(el));
  }

  static createUser(data) {
    return new User(
      data.id,
      data.firstName,
      data.lastName,
      data.email,
      data.gender,
      data.age
    );
  }
}

module.exports = UserFactory;
