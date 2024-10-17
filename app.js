const Controller = require("./controllers/controller");
const command = process.argv[2];

switch (command) {
  case "list":
    Controller.getAllUsers();
    break;
  case "register":
    const [firstName, lastName, email, gender, age] = process.argv.slice(3);
    Controller.register(firstName, lastName, email, gender, +age);
    break;
  case "help":
    Controller.help();
    break;
  default:
    console.log("Invalid command");
}
