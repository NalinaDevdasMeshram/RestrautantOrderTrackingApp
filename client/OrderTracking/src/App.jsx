import { useEffect, useState } from "react";
import API from "./components/api.js";
import OrderForm from "./components/OrderForm.jsx";

function App() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/orders");
      console.log("Fetched orders:", res.data);
      setOrders(res.data);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const createOrder = async (orderData) => {
    try {
      const response = await API.post("/orders", orderData);
      console.log("Order created:", response.data);
      fetchOrders();
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  useEffect(() => {
    fetchOrders();
    console.log("Orders state updated:", orders);
  }, [orders]);

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <h1>Restaurant Order Tracker</h1>
      <OrderForm onCreate={createOrder} />
      {orders.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          console.log(orders);
          {orders.map((order) => (
            <li
              key={order._id}
              style={{
                margin: "10px 0",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                borderRadius: "8px",
              }}
            >
              <strong>{order.customerName}</strong> ordered{" "}
              <em>{order.itemName}</em>
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

export default App;
