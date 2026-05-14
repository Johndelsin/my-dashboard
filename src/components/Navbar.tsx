export default function Navbar(){
    return (
        <nav className="boarder-b p-4 flex justify-between items-center bg-white">
            <h1 className="font-bold text-xl">Order Intel</h1>
            <div className="flex gap-6">
                <a href="#" className="hover:text-blue-600">Dashboard</a>
                <a href="#" className="hover:text-blue-600">Orders</a>
                <a href="#" className="hover:text-blue-600">Settings</a>
            </div>
        </nav>
    );
}