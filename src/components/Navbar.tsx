import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {

    const { logout } = useAuth0();
    const user = JSON.parse(localStorage.getItem('user') || "{}")
    const token = JSON.parse(localStorage.getItem('token'))


    const handleLogout = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        await logout();
    };

    return (
        <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center h-16">
                <div className="flex items-center space-x-4">
                    <img
                        src={"https://img.freepik.com/premium-photo/judges-hammer-vector-logo-illustration_712527-3703.jpg?w=826"}
                        alt="Logo"
                        className="w-24 rounded-full"
                    />
                    <span className="text-black text-2xl font-bold">AuctionMania</span>
                </div>
                <div className="flex items-center space-x-4">
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="bg-white text-light-blue-500 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100"
                        >
                            Logout
                        </button>
                    ) : (
                        <LoginButton text="Login" className="bg-white text-light-blue-500 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100" />
                    )}
                    {
                        user?.picture && <img
                            src={user?.picture ? user.picture : "https://via.placeholder.com/40"}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
