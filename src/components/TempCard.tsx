type KpiCardProps = {
    title: string;
    value: string | number;
};

export default function KpiCard( {title, value}: KpiCardProps ) {
    return (
        <div className = "border p-4 rounded" >
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    );
}