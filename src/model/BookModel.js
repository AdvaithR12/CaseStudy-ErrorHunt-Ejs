const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://adv:adv123@cluster0.iy6ncyz.mongodb.net/Library?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  about: String,
});

const bookdata = mongoose.model("bookdata", BookSchema);

module.exports = bookdata;
