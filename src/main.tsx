import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // wrap with <React.StrictMode> make react rendered twice
  <BrowserRouter>
    <BaseLayout>
      <App />
    </BaseLayout>
  </BrowserRouter>
);
