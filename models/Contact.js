const mangoose = require("mongoose");

const ContactSchema = mangoose.Schema({
  user: {
    type: mangoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mangoose.model("contact", ContactSchema);
