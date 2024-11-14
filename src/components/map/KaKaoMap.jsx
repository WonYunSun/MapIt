import { Map, useKakaoLoader } from "react-kakao-maps-sdk";

export default function KakaoMap() {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_REACT_APP_KAKAOMAP_KEY, //VITE접두사...가 필요했던듯
  });

  if (loading) return <p>Loading map...</p>;
  if (error) {
    console.log(error);
    return <p>Error loading map.</p>;
  }

  return (
    <Map
      level={3}
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "100vh" }}
    />
  );
}
