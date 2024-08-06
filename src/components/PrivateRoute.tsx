import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
    const { loginWithRedirect } = useAuth0();
    const token = localStorage.getItem('token')

    if (!token) {
        loginWithRedirect();
    }

    return children;
};

export default PrivateRoute;
