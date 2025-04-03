import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./context/appContext.jsx";
import { Toaster } from "react-hot-toast"; // Import Toaster

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Add Toaster here */}
    </AppContextProvider>
  </BrowserRouter>
);
