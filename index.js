const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//set up express

const app = express();
app.use(express.json());
app.use(cors());

//staring server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`the server has started on port :${PORT} `));

// setup mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongo Db connection established");
  }
);

//set routes

app.use("/users", require("./routes/userRouter"));
