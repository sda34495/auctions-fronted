import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ className, text }: { className: string, text: string }) => {
    const { loginWithRedirect, getIdTokenClaims, user, isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    useEffect(() => {
        const getToken = async () => {
            try {
                if (isAuthenticated && !localStorage.getItem('token')) {
                    const idTokenClaims = await getIdTokenClaims();
                    const idToken = idTokenClaims?.__raw; // The ID token is in the __raw property
                    if (!idToken) return;
                    localStorage.setItem('token', JSON.stringify(idToken));
                    localStorage.setItem('user', JSON.stringify(user));
                    navigate('/auctions')
                }
            } catch (error) {
                console.error("Error getting ID token:", error);
            }
        };

        getToken();
    }, [isAuthenticated, getIdTokenClaims, user]);

    return <button className={className} onClick={() => loginWithRedirect()}>{text}</button>;
};

export default LoginButton;
