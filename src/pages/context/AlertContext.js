import { useContext, createContext,useState } from "react";
// eslint-disable-next-line no-unused-vars
import {children} from 'react'

const AlertContext = createContext();

const AlertProvider = ({children}) => {
    const [alertObj,setAlertObj] = useState({text:"alert text",alerttype:"info"})
    const [alertstatus , setalertstatus] = useState(false)
    
    const showalert = (alertinput) => {
        setAlertObj(alertinput);
        setalertstatus(true)
        
        
        setTimeout(() => {
            setalertstatus(false)
            
        }, 1500);
    }

    return(
    <AlertContext.Provider value={{showalert,alertstatus,alertObj}}>
        {children}
    </AlertContext.Provider>
    )
    
}

const useAlert = () => useContext(AlertContext);

export {useAlert,AlertProvider}