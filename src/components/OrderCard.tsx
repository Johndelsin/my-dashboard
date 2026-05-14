type Order = {
    id: number;
    total: number;
    status: string;
};

export default function OrderCard ({order} :{order : Order}){
    return (
        <div>
            <p>Order ID: {order.id}</p>
            <p>Order Value: {order.total}</p>
            <p>Order Status: {order.status}</p>
        </div>
    );
}