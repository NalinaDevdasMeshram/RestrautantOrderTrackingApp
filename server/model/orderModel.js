import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [String],
      required: true,
      validate: [(arr) => arr.length > 0, "At least one item is required"],
    },
    status: {
      type: String,
      enum: ["Preparing", "Ready", "Completed"],
      default: "Preparing",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
