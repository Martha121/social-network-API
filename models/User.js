const { Schema, model } = require("mongoose");

const moment = require("moment");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/ , "Please enter a valid email address"],
    },
    thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],
    friends: [{ type: Schema.Types.ObjectId, ref: "User"}],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false,
  }
);



// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

const User = model("User", userSchema);

module.exports = User;
