import OrderCard from "../components/OrderCard";
import KpiCard from "../components/TempCard";

export default function HomePage(){
  const orders = [
    {id: 1, total: 120, status: "Pending"},
    {id: 2, total: 340, status: "Shipped"},
    {id: 3, total: 560, status: "Delivered"},
  ];

  return (
    <main>
      <h1>AI Order Intelligence Platform</h1>
      <p>Total Orders: {orders.length}</p>

      <div className="flex gap-4">
        <KpiCard title="Revenue" value="$1,020"/>
        <KpiCard title="Total Orders" value={orders.length}/>
        <KpiCard title="Pending" value="1" />
      </div>

      <div>
        {orders.map((order) =>(
          <OrderCard key={order.id} order={order}/>
        ))
        }
      </div>
    </main>
  )
}