import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { AddFormProvider } from "./context/AddFormProvider.tsx";
import { MediaEntrepriseProvider } from "./context/MediaEntrepriseProvider.tsx";
import { CampagneProvider } from "./context/CampagneProvider.tsx";
import { QRCodeProvider } from "./context/QRCodeProvider.tsx";
import EntrepriseProvider from "./context/EntrepriseProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <AddFormProvider>
        <MediaEntrepriseProvider>
          <CampagneProvider>
            <QRCodeProvider>
              <EntrepriseProvider>
                <App />
              </EntrepriseProvider>
            </QRCodeProvider>
          </CampagneProvider>
        </MediaEntrepriseProvider>
      </AddFormProvider>
    </AuthProvider>
  </BrowserRouter>
);
