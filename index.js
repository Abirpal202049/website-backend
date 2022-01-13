const PORT = process.env.PORT || 3000;

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const { createServer } = require("http");
const cookieParser = require("cookie-parser");

const routes = require("./src/routes");

const corsConfig = require("./src/config/cors.config");
const dbConfig = require("./src/config/db.config");

const generate = require("./src/utils/generate");

const index = express();
const server = createServer(index);

config({ path: "./src/config/.env" });
generate.secret();

index.use(cookieParser());
index.use(express.json());
index.use(cors(corsConfig));
index.use(express.urlencoded({ extended: true }));

index.use("/api", routes);

mongoose
  .connect(process.env.databaseURI, dbConfig)
  .then(() =>
    server.listen(PORT, console.log.bind(this, "server initialized"))
  );
