import ReactDOM from "react-dom/client";
import App from "./App";
import { DrawerProvider } from "./components/custom/Drawer/context";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <DrawerProvider>
        <App />
    </DrawerProvider>
);
