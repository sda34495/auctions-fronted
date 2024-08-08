import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (!isAuthenticated) {
        loginWithRedirect();
    }

    return children;
};

export default PrivateRoute;
