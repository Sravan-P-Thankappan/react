
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext(
    {
        isLoggedIN: false,
        onLogout: () => { },
        onLogin: (email,password) => { }
    }
);


export const AuthContextProvider = ({ children }) => {

    const [isLoggedIN, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const loginDetails = localStorage.getItem('loggedIn')
        if (loginDetails === '1') setIsLoggedIn(true)
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem('loggedIn')
        setIsLoggedIn(false);
    };

    const loginHandler = (email, password) => {

        setIsLoggedIn(true);
        console.log('Logingggggg')
        localStorage.setItem('loggedIn', '1')
        
    };


    return (

        <AuthContext.Provider
            value={{
                isLoggedIN: isLoggedIN,
                onLogin:loginHandler,
                onLogout:logoutHandler
            }}
        >
            {children}

        </AuthContext.Provider>
    )

}

