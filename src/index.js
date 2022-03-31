import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { CartProvider } from "./pages/context/cartcontext";
import {WishListProvider} from "./pages/context/wishlistcontext"
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <WishListProvider>
      <Router>
        <App />
      </Router>
    </WishListProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
