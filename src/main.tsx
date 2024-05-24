import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { AddFormProvider } from "./context/AddFormProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <AddFormProvider>
        <App />
      </AddFormProvider>
    </AuthProvider>
  </BrowserRouter>
);
