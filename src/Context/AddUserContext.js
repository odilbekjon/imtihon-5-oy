import { createContext , useState  } from "react";

let Context = createContext()

function Provider({children}){

    const [user, setUser] = useState([])

   return  <Context.Provider value={{user, setUser}} >{children}</Context.Provider>
} 

export {Provider , Context}