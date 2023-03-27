import "express-async-errors";
import "reflect-metadata";
import express from "express";
import handleError from "./errors/handleError";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;
