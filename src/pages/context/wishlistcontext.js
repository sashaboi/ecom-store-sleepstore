import { useContext , createContext } from "react";
// eslint-disable-next-line no-unused-vars
import { children } from "react";
import { useReducer } from "react";
import axios from 'axios'
import { useState ,useEffect } from "react";


const WishListContext = createContext();

const WishListProvider = ({children}) =>{
    const [localWishList , setlocalWishList ]= useState([])
    
    useEffect(()=>{
        var token = localStorage.getItem('token');
        
        const header = {
        authorization: token
        }     
        if (token){
            token = '"'+token+'"'
            axios.get('/api/user/wishlist',{headers : header})
        .then((response)=>{
            
            WishListdispatch({type:"setWishList",payload:response.data.wishlist})
            setlocalWishList(response.data.wishlist)
          
        },
        (error)=>{
          console.log(error);
          
        })
        }
        
    
        
    
      },[])
    
    const reducerfunc = (state,action)=>{
        switch(action.type){
            case "setWishList":{
                const result = action.payload
                return result
            }
            default:{
                console.log('default condition');
                return state
            }

        }
        
    }

    const [WishListState,WishListdispatch] = useReducer(reducerfunc,[])
        return(
            <WishListContext.Provider value={{WishListdispatch,WishListState,localWishList , setlocalWishList}}>
            {children}
            </WishListContext.Provider>
        )
}

const useWishlist = () => useContext(WishListContext);

export {useWishlist,WishListProvider}