const express = require("express");
const app = express();
const login = require("./routes/AdminLog");
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5050;

const PropertyRoute = require("./routes/Property")
const profileRoutes = require('./routes/profileRoutes'); 
const connect = async () => {
  try {
    await mongoose.connect(process.env.mongoUri);
    console.log("Connected to DB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

// middlewares
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.get('/', (req, res) => {
 res.json("server runing");
});
// Client Api
// app.use("/api")
app.use("/api/property",PropertyRoute)
// Admin Api routes
app.use("/api", login);
// Profile routes
app.use('/api/profiles', profileRoutes); 
// Error middleeware

app.use((error, req, res, next) => {
  const errorMessage = error.message || "Something went wrong";
  const errorStatus = error.status || 500;

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(PORT, () => {
  connect();
  console.log("server started in localhost 6060");
});
