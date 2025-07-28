import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";    
import {TodosProvider} from './context/TodosContext';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </AuthProvider>
  </React.StrictMode>
);