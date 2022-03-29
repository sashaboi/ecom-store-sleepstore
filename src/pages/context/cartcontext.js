import { useContext , createContext } from "react";
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useReducer } from "react";
import axios from 'axios'
import { useState ,useEffect } from "react";
const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [originalproducts , setoriginalproducts] = useState([])
    useEffect(()=>{
        console.log('use effect running from cartcontext reducer func');
        
        axios.get('/api/products')
        .then((response)=>{
            setoriginalproducts(response.data.products)
            dispatch({type:"setcart",payload:response.data.products})
            
          
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
                console.log(action.payload.range);
                const results = originalproducts.filter((obj) => Number(obj.price) <= action.payload.range);
                
                return results
            }
            case "setcart":{
                console.log('reached setcart',action.payload);
                const results = action.payload
                
                return results
            }
            case "4star":{
                console.log('reached 4star',action.payload);
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=4);
                
                return results
            }
            case "3star":{
                console.log('reached 4star',action.payload);
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=3);
                
                return results
            }
            case "2star":{
                console.log('reached 4star',action.payload);
                
                const results = originalproducts.filter((obj) => Number(obj.rating) >=2);
                
                return results
            }
            case "categoryfilter":{
                console.log('categoryfilter',action.payload);
                
                const results = originalproducts.filter((obj) => obj.categoryName === action.payload);
                
                return results
            }
            case "reset":{
                
                
                return originalproducts
            }
            case "addtocart":{
                console.log('reached add to cart , functionality will be written when auth is done');
                return state
            }
            default:{
                console.log('default condition');
                return state
            }

        }
        
    }

    const [state,dispatch] = useReducer(reducerfunc,[])
        return(
            <CartContext.Provider value={{dispatch,state}}>
            {children}
            </CartContext.Provider>
        )
}

const useCart = () => useContext(CartContext);

export {useCart,CartProvider}