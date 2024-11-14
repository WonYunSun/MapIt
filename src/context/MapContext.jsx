import { createContext, useContext, useState } from "react";
import { useKakaoLoader } from "react-kakao-maps-sdk";
const MapContext = createContext();

export const UseMapContext = () => {
  return useContext(MapContext);
};
export const MapProvider = ({ children }) => {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_REACT_APP_KAKAOMAP_KEY,
    libraries: ["clusterer", "drawing", "services"],
  });
  const [map, setMap] = useState(null);
  const [keyWords, setKeyWords] = useState("");

  return (
    <MapContext.Provider
      value={{ map, setMap, keyWords, setKeyWords, loading, error }}
    >
      {children}
    </MapContext.Provider>
  );
};
