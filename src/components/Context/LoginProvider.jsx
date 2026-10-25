import { useState } from "react";
import loginProvider from './context'
const LoginProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const LogIn = () => {
        setUser({ user: "Dima", password: "adada" });
        setIsLoggedIn(true);
    }
    const LogOut = () => {
        setUser(null);
        setIsLoggedIn(false);
    }
    const providerValue = {
        user,LogIn,LogOut,isLoggedIn
    }
    return (
        <loginProvider.Provider value={providerValue}>
            {children}
        </loginProvider.Provider>
    )
}
export default LoginProvider