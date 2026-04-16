import OrderCard from "./OrderCard";

function OrderList({ OrderForm, orders, onAdvance }) {
  if (orders.length === 0) {
    return <p>{OrderForm}</p>;
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
