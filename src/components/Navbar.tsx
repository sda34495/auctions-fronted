import { useEffect, useState } from 'react';
import LoginButton from './LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {

    const { logout, isAuthenticated, getIdTokenClaims } = useAuth0();
    const [user, setUser] = useState({})


    const handleLogout = async () => {
        await logout();
    };


    useEffect(() => {
        const fetchData = async () => {
            if (isAuthenticated) {
                try {
                    const result = await getIdTokenClaims()
                    setUser(result)
                } catch (error) {
                    console.error('Error fetching token:', error);
                }
            }
        };

        fetchData();
    }, [isAuthenticated, getIdTokenClaims]);

    return (
        <header className=" bg-gradient-to-r from-[#6d3f77] to-[#f7c93b]  sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img
                        src="https://img.freepik.com/premium-photo/judges-hammer-vector-logo-illustration_712527-3703.jpg?w=826"
                        alt="Logo"
                        className="w-12 rounded-full"
                    />
                    <span className="text-black text-2xl font-bold">AuctionMania</span>
                </div>

                <nav className="flex items-center space-x-4">

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="rounded-lg   bg-black text-white px-6 py-1"
                        >
                            Logout
                        </button>
                    ) : (
                        <LoginButton text="Login" className="rounded-lg  bg-black text-white px-8 py-1" />
                    )}
                    {
                        user?.picture && <img
                            src={user?.picture ? user.picture : "https://via.placeholder.com/40"}
                            alt="Avatar"
                            className="w-10 h-10 rounded-full"
                        />
                    }
                </nav>
            </div>
        </header>
    );
};

export default Navbar;