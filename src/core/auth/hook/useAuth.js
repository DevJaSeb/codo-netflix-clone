import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

export const useAuth = () => {
    const {isLoggedIn, login, logout} = useContext(AuthContext);
    const[showConfig, setShowConfig] = useState(false);

    const toggleConfig = () => {
        setShowConfig(!showConfig)
    }

    return{
        isLoggedIn,
        login,
        logout,
        toggleConfig,
        showConfig
    }
}