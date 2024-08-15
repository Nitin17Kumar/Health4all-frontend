import {createContext, useContext, useState} from 'react';

// step 1  -- create context
export const AuthContext = createContext();


 function AuthContextProvider({children}){
    const [token, setToken]=useState('null');
    const [loading, setLoading] =useState(false);
     // write all the variable and function that you wanr tot use in the web


    const value={
        token,
        setToken,
        loading,
        setLoading
    };

    return(
        //step 2  -- provide the context
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
)
}



export default AuthContextProvider;
