import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
  },
  age: Number,
  todos: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Todo",
  },
});

const User = mongoose.model("User", userSchema);

export { User as UserModel };
