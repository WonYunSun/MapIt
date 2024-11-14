import { useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";
import MapControls from "./MapControls";
import useMap from "../../hooks/useMap"; // 경로 수정
import useCurrentLocation from "../../hooks/useCurrentLocation"; // 경로 수정
import { UseMapContext } from "../../context/MapContext";

export default function KakaoMap() {
  const { zoomIn, zoomOut, setCenterToMyPosition } = useMap();
  const { map, setMap, loading, error } = UseMapContext();
  const location = useCurrentLocation();

  const displayMarker = (locPosition, markerImagePath = null) => {
    if (!map) return;

    const markerImage = new window.kakao.maps.MarkerImage(
      markerImagePath,
      new window.kakao.maps.Size(24, 24)
    );

    const marker = new window.kakao.maps.Marker({
      map: map,
      position: locPosition,
      image: markerImage,
    });
    marker.setMap(map);
  };

  useEffect(() => {
    if (!loading && map) {
      const locPosition = new window.kakao.maps.LatLng(
        location.lat,
        location.lng
      );
      displayMarker(locPosition, "/assets/mylocation.svg");
      map.setCenter(locPosition);
    }
  }, [loading, map, location]);

  if (loading) return <p>Loading map...</p>;
  if (error) {
    console.log(error);
    return <p>Error loading map.</p>;
  }

  return (
    <Map
      center={{ lat: location.lat, lng: location.lng }}
      level={3}
      style={{ width: "100%", height: "100vh" }}
      onCreate={setMap}
      draggable="true"
    >
      {/* 지도 컨트롤 컴포넌트 추가 */}
      <MapControls
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        setCenterToMyPosition={() =>
          setCenterToMyPosition(location.lat, location.lng)
        }
      />
    </Map>
  );
}
