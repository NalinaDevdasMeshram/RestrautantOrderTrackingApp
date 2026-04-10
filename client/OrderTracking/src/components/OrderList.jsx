import OrderCard from "./OrderCard";

function OrderList({ orders, onAdvance }) {
  if (orders.length === 0) {
    return <p>No orders yet.</p>;
  }

  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order._id} order={order} onAdvance={onAdvance} />
      ))}
    </div>
  );
}

export default OrderList;
