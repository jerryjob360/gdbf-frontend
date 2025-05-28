import { createContext, useContext, useState } from "react";

const stateContext = createContext({
    currentUser: {},
    userToken:'',
    setcurrentUser: () => {},
    setuserToken: () => {},
})

export const ContextProvider = ({ children }) => {
    const [currentUser, _setcurrentUser] = useState(localStorage.getItem('USERNAM') || '');
    const [userToken, _setuserToken] = useState(localStorage.getItem('accessToken') || '');


    const setuserToken = (token) => {
        if(token){
            localStorage.setItem('accessToken', token);
        }else{
            localStorage.removeItem('accessToken');
        }
        _setuserToken(token);
    }
    
    const setcurrentUser = (username) => {
        if(username){
            localStorage.setItem('USERNAM', username);
        }
        _setcurrentUser(username);
    }
    
    return (
        <stateContext.Provider
            value = {{ 
                currentUser,
                setcurrentUser,
                userToken,
                setuserToken
             }}
        >
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)