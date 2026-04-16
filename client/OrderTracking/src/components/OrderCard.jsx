// function OrderCard({ order, onAdvance }) {
//   const isCompleted = order.status === "Completed";

//   return (
//     <div
//       style={{
//         border: "1px solid #ddd",
//         borderRadius: "8px",
//         padding: "16px",
//         marginBottom: "12px",
//       }}
//     >
//       <h3>{order.customerName}</h3>
//       <p>
//         <strong>Items:</strong> {order.items.join(", ")}
//       </p>
//       <p>
//         <strong>Status:</strong> {order.status}
//       </p>

//       <button onClick={() => onAdvance(order._id)} disabled={isCompleted}>
//         {isCompleted ? "Completed" : "Advance Status"}
//       </button>
//     </div>
//   );
// }

// export default OrderCard;
