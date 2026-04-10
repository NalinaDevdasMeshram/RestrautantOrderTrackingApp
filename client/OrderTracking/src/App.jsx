import { useEffect, useState } from "react";
import API from "./components/api.js";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";

function App() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const createOrder = async (orderData) => {
    try {
      await API.post("/orders", orderData);
      fetchOrders();
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  const advanceStatus = async (id) => {
    try {
      await API.patch(`/orders/${id}/status`);
      fetchOrders();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Restaurant Order Tracker</h1>
      <OrderForm onCreate={createOrder} />
      <OrderList orders={orders} onAdvance={advanceStatus} />
    </div>
  );
}

export default App;
