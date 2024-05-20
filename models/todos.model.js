import mongoose from "mongoose";

const TodoSchema = mongoose.Schema(
  {
    text: {
        type: String
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Todos = mongoose.model("Todo", TodoSchema);

export { Todos as TodosModel };
