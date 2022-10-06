const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://adv:adv123@cluster0.iy6ncyz.mongodb.net/Library?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uid: String,
  pwd: String,
});

const userdata = mongoose.model("userdata", userSchema);

module.exports = userdata;
