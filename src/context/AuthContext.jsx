import {createContext, usecontext, useState} from 'react';

constAuthContext = createContext();

export function AuthProvider({children}) {
    const [isAuthenticated, setIsAuthenticated]= useState(false);
   const [user, setUser]= useState(null);
   const [loading,setLoading] = useState(true);
   const [error, setError] =useState(null);


   
   }
}