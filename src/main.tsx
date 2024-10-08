import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { AddFormProvider } from "./context/AddFormProvider.tsx";
import { MediaEntrepriseProvider } from "./context/MediaEntrepriseProvider.tsx";
import { CampagneProvider } from "./context/CampagneProvider.tsx";
import { QRCodeProvider } from "./context/QRCodeProvider.tsx";
import EntrepriseProvider from "./context/EntrepriseProvider.tsx";
import { PageProvider } from "./context/PageProvider.tsx";
import { StatProvider } from "./context/StatProvider.tsx";
import { LogProvider } from "./context/LogProvider.tsx";
import { MailProvider } from "./context/MailProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <AddFormProvider>
        <MediaEntrepriseProvider>
          <CampagneProvider>
            <QRCodeProvider>
              <EntrepriseProvider>
                <PageProvider>
                  <StatProvider>
                    <LogProvider>
                      <MailProvider>
                        <App />
                      </MailProvider>
                    </LogProvider>
                  </StatProvider>
                </PageProvider>
              </EntrepriseProvider>
            </QRCodeProvider>
          </CampagneProvider>
        </MediaEntrepriseProvider>
      </AddFormProvider>
    </AuthProvider>
  </BrowserRouter>
);
