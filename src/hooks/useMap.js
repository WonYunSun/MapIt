import { useState } from "react";

const useMap = () => {
  const [map, setMap] = useState(null);

  const zoomIn = () => {
    if (map) map.setLevel(map.getLevel() - 1);
  };

  const zoomOut = () => {
    if (map) map.setLevel(map.getLevel() + 1);
  };

  const setCenterToMyPosition = (lat, lng) => {
    if (!map) return;
    map.panTo(new window.kakao.maps.LatLng(lat, lng));
  };

  return { map, setMap, zoomIn, zoomOut, setCenterToMyPosition };
};

export default useMap;
