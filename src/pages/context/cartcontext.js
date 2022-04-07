import { useContext , createContext } from "react";
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useReducer } from "react";
import axios from 'axios'
import { useState ,useEffect } from "react";
import { useAlert } from "./AlertContext";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const {showalert} = useAlert();
    const [ originalproducts , setoriginalproducts] = useState([])
    const [ cartlength , setcartlength] = useState(0)
    const [localcart , setlocalcart ]= useState([])

    useEffect(()=>{
        
        
        axios.get('/api/products')
        .then((response)=>{
            setoriginalproducts(response.data.products)
            dispatch({type:"setProducts",payload:response.data.products})
            
          
        },
        (error)=>{
          console.log(error);
          
        })
    
        
    
      },[])
    
    const reducerfunc = (state,action)=>{
        switch(action.type){
            case "lowtohigh":{
                
                
                const result = [...action.payload.data].sort(function (a, b) {
                    return a.price - b.price;
                  });
                  
                
                  
                return result;
                
            }
            case "hightolow":{
                
                
                const result = [...action.payload.data].sort(function (a, b) {
                    return b.price - a.price;
                  });
                  
                
                  
                return result;
                
            }
            case "range":{
                
                const results = originalproducts.filter((obj) => Number(obj.price) <= action.payload.range);
                
                return results
            }
            case "setProducts":{
                
                const results = action.payload
                
                return results
            }
            case "4star":{
                
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=4);
                
                return results
            }
            case "3star":{
                
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=3);
                
                return results
            }
            case "2star":{
                
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=2);
                
                return results
            }
            case "categoryfilter":{
                
                
                const results = originalproducts.filter((obj) => obj.categoryName === action.payload);
                
                return results
            }
            case "search":{
                
                
                const results = originalproducts.filter((obj) => obj.title.toUpperCase().includes(action.payload.toUpperCase()) );
                
                return results
            }
            case "reset":{
                
                showalert({text:"Filters have been Reset",alerttype:"info"})
                return originalproducts
            }
           
            default:{
                console.log('default condition');
                return state
            }

        }
        
    }

    const [state,dispatch] = useReducer(reducerfunc,[])
        return(
            <CartContext.Provider value={{dispatch,state,cartlength , setcartlength ,localcart , setlocalcart}}>
            {children}
            </CartContext.Provider>
        )
}

const useCart = () => useContext(CartContext);

export {useCart,CartProvider}