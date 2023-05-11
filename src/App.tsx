import { IonApp, setupIonicReact } from "@ionic/react";
import "./App.css";
import Navigation from "./routing/Navigation";

setupIonicReact();

const App: React.FC = () => (
  <IonApp style={{ height: "100%" }}>
    <Navigation />
  </IonApp>
);

export default App;
