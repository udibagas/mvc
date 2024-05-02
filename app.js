"use strict";

const Controller = require("./controllers");
const command = process.argv[2];

switch (command) {
  case "list":
    Controller.list();
    break;

  case "register":
    const [firstName, lastName, email, gender, age] = process.argv.slice(3);
    Controller.register(firstName, lastName, email, gender, +age);
    break;

  default:
    Controller.help();
    break;
}
