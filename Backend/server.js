const dotenv = require("dotenv");
const app = require("./app");

process.on("uncaughtException", (err) => {
  console.log("uncaughtException Shutting down application");
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}.....`);
});

process.on("unhandledRejection", (err) => {
  console.log("UnhandledRejection Shutting down application");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
