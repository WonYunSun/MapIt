import { TbCurrentLocation } from "react-icons/tb";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi2";
import styled from "styled-components";

// 전체 컨트롤러를 감싸는 StyledController
const StyledController = styled.div`
  position: absolute;
  right: 2%;
  bottom: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 100;
`;

// LocationButton 스타일
const LocationButton = styled.div`
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 6px, rgba(0, 0, 0, 0.123) 0px 3px 6px;
  cursor: pointer;
  z-index: 101;

  &:hover {
    background-color: #f0f0f0; // hover 시 배경색 변경
  }
`;

// Zoom controls 컨테이너 스타일
const ZoomControls = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 3px 6px, rgba(0, 0, 0, 0.123) 0px 3px 6px;
  overflow: hidden;
  border-radius: 18px;
`;

// ZoomButton 개별 스타일
const ZoomButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; // hover 시 배경색 변경
  }
`;

const MapControls = ({ zoomIn, zoomOut, setCenterToMyPosition }) => {
  return (
    <StyledController>
      {/* LocationButton을 div로 변경하고 클릭 이벤트 처리 */}
      <LocationButton onClick={setCenterToMyPosition}>
        <TbCurrentLocation size={20} />
      </LocationButton>
      {/* Zoom Controls */}
      <ZoomControls>
        <ZoomButton onClick={zoomIn}>
          <HiOutlinePlus size={25} />
        </ZoomButton>
        <ZoomButton onClick={zoomOut}>
          <HiOutlineMinus size={25} />
        </ZoomButton>
      </ZoomControls>
    </StyledController>
  );
};

export default MapControls;
