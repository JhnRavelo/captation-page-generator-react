import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { AddFormProvider } from "./context/AddFormProvider.tsx";
import { MediaEntrepriseProvider } from "./context/MediaEntrepriseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <AddFormProvider>
        <MediaEntrepriseProvider>
          <App />
        </MediaEntrepriseProvider>
      </AddFormProvider>
    </AuthProvider>
  </BrowserRouter>
);
