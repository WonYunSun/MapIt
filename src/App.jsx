import GlobalStyles from "../public/Globalstyles";
import "./App.css";
import Layout from "./components/Layout";

import KakaoMap from "./components/map/KaKaoMap";
import { MapProvider } from "./context/MapContext";
function App() {
  return (
    <MapProvider>
      <GlobalStyles />
      <Layout>
        <KakaoMap />
      </Layout>
    </MapProvider>
  );
}

export default App;
