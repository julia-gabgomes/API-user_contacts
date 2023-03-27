import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize()
    .then(() => console.log("Database connected!"))
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3001, () => {
    console.log("Server running on port localhost:3000");
  });
})();
