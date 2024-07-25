const Controller = require("./controllers/controller");
const command = process.argv[2];

if (command === "list") {
  Controller.list();
}

if (command === "register") {
  const [firstName, lastName, email, gender, age] = process.argv.slice(3);
  Controller.register({ firstName, lastName, email, gender, age });
}
