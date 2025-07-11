import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

// Create compound index for user-specific queries
TaskSchema.index({ userId: 1, createdAt: -1 })
TaskSchema.index({ userId: 1, completed: 1 })

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema)
