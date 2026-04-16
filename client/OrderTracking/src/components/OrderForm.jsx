import React, { useState } from "react";

const OrderForm = ({ onCreate }) => {
  const [customerName, setCustomerName] = useState("");
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      customerName,
      itemName,
    };
    onCreate(orderData);
    //clear from input
    setCustomerName("");
    setItemName("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          margin: "20px 0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <input
          type="text"
          placeholder="CustomerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          style={{
            margin: "20px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          placeholder="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          required
          style={{
            margin: "20px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          style={{
            padding: "10px",
            background: "orange",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "medium",
          }}
        >
          Create Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
