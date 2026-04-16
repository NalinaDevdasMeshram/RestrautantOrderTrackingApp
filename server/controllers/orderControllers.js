import Order from "../model/orderModel.js";

// get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
    console.log(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

//create new order
export const createOrders = async (req, res) => {
  const { customerName, items, status } = req.query;
  try {
    if (customerName && items && status) {
      const orders = await Order.find({
        customerName: customerName,
        items: items,
        status: status,
      });
      console.log(orders);
      res
        .status(200)
        .json({ message: "orders fetched successfully", Orders: orders });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching orders", error: error.message });
  }
};

// update order status
export const updateOrders = async (req, res) => {
  try {
    const updateOrder = await Order.findVyIdAndUpdate(req.params.orderId);
    if (!updateOrder) {
      return res.status(404).json({ message: "order not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating order", error: error.message });
  }
};

// delete order
export const deleteOrders = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res.status(404).json({ message: "order not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting order", error: error.message });
  }
};
