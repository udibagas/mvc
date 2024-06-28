"use strict";

const Controller = require("./controllers/controller");
const command = process.argv[2];

switch (command) {
  case "list":
    Controller.showUsers();
    break;

  case "register":
    const [firstName, lastName, email, gender, age] = process.argv.slice(3);
    Controller.register(firstName, lastName, email, gender, Number(age));
    break;

  case "showUser":
    const id = process.argv[3];
    Controller.showUser(+id);
    break;

  case "deleteUser":
    const userId = process.argv[3];
    Controller.deleteUser(+userId);
    break;

  default:
    Controller.showHelp();
    break;
}
