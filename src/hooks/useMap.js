import { useState } from "react";
import { UseMapContext } from "../context/MapContext";

const useMap = () => {
  const { map, setMap } = UseMapContext();
  const [markers, setMarkers] = useState([]);
  const [keyWords, setKeyWords] = useState("");

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

  const searchPlaces = (keyWords) => {
    if (!map) return;

    const ps = new window.kakao.maps.services.Places();
    // 현재 중심 좌표를 가져옵니다
    const center = map.getCenter();
    const lat = center.getLat();
    const lng = center.getLng();
    const options = {
      location: new window.kakao.maps.LatLng(lat, lng), // 중심 좌표
      sort: window.kakao.maps.services.SortBy.ACCURACY,
      radius: 5000, // 반경 5km
      size: 10,
    };

    ps.keywordSearch(
      keyWords,
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          // 기존 마커들을 제거
          markers.forEach((marker) => {
            marker.setMap(null);
          });

          // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기 위해
          const bounds = new window.kakao.maps.LatLngBounds();
          let newMarkers = []; // 새로운 마커들을 담을 배열

          // 새로운 마커들을 생성하고, 배열에 추가
          for (let i = 0; i < data.length; i++) {
            const position = new window.kakao.maps.LatLng(data[i].y, data[i].x);
            const marker = new window.kakao.maps.Marker({
              position: position,
              map: map,
              image: new window.kakao.maps.MarkerImage(
                "https://cdn-icons-png.flaticon.com/128/2098/2098567.png",
                new window.kakao.maps.Size(35, 35)
              ),
            });

            newMarkers.push(marker); // Marker 객체를 배열에 추가
            bounds.extend(position); // 지도 범위 설정
          }

          setMarkers(newMarkers); // 새로운 마커 목록을 상태에 저장
          map.setBounds(bounds); // 지도 범위 재설정
        }
      },
      options
    );
  };

  return {
    map,
    setMap,
    zoomIn,
    zoomOut,
    setCenterToMyPosition,
    markers,
    keyWords,
    setKeyWords,
    searchPlaces,
  };
};

export default useMap;
