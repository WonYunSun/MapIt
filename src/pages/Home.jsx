import { IoSearch } from "react-icons/io5";
import useMap from "../hooks/useMap";
export default function Home() {
  const { keyWords, setKeyWords, searchPlaces, map } = useMap();

  const handleSearch = () => {
    if (keyWords && map) {
      searchPlaces(keyWords);
    } else {
      console.log("맵 초기화 안된듯");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="장소를 검색해보세요"
        value={keyWords} // input의 value는 keyWords로 바인딩
        onChange={(e) => setKeyWords(e.target.value)} // 키워드 입력 시 상태만 업데이트
      />
      <button type="button" onClick={handleSearch}>
        <IoSearch size={24} />
      </button>
    </div>
  );
}
