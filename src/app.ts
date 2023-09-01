import "reflect-metadata";
import "express-async-errors";
import express from "express";

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

export default app;
