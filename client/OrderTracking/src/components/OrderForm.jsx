import { useState } from "react";

function OrderForm({ onCreate }) {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemList = items
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!customerName || itemList.length === 0) {
      alert("Please enter customer name and at least one item");
      return;
    }

    onCreate({
      customerName,
      items: itemList,
    });

    setCustomerName("");
    setItems("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={(e) => setCustomerName(e.target.value)}
        style={{ marginRight: "10px", padding: "8px", width: "200px" }}
      />
      <input
        type="text"
        placeholder="Items (comma separated)"
        value={items}
        onChange={(e) => setItems(e.target.value)}
        style={{ marginRight: "10px", padding: "8px", width: "300px" }}
      />
      <button type="submit">Create Order</button>
    </form>
  );
}

export default OrderForm;
