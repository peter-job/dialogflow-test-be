const app = require("./app.js");
const { port = 9090 } = process.env;

app.listen(port, error => {
  if (error) console.log(error);
  console.log(`listening on ${port}`);
});
