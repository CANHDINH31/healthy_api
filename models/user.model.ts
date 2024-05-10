const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    image: {
      type: String,
    },

    name: {
      type: String,
    },

    username: {
      type: String,
    },

    email: {
      type: String,
    },

    password: {
      type: String,
      require: true,
    },

    // 0: user 1: admin
    role: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
