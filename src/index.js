import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { CartProvider } from "./pages/context/cartcontext";
import {WishListProvider} from "./pages/context/wishlistcontext"
import {AlertProvider} from './pages/context/AlertContext'
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AlertProvider>
    <CartProvider>
    <WishListProvider>
      
      
        <App />
        
      
    </WishListProvider>
    </CartProvider>
    </AlertProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
