import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import Home from "../pages/Home";
import Bookmarks from "../pages/Bookmarks";
const SideContentWrapper = styled.div`
  position: relative;
  transition: transform 0.3s ease; /* 애니메이션 효과 */
  transform: ${({ $isHidden }) =>
    $isHidden ? "translateX(-100.3%)" : "translateX(0)"};
`;
const SideConentbar = styled.div`
  min-width: 390px;
  height: 100%;
  flex: 1;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px;
`;

const SideBtn = styled.button`
  position: absolute;
  top: 50%;
  right: -23px;
  width: 23px;
  height: 46px;
  border-radius: 0px 9px 9px 0px;
  background-color: #fff;
  transform: translateY(-50%); /* 세로 중앙 정렬 */
  background-clip: padding-box;
  z-index: 10;
  &:hover {
    opacity: 1;
    color: blue;
  }
`;

export default function SideContent() {
  const [isHidden, setIsHidden] = useState(false);
  const handleSideContentBar = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <SideContentWrapper $isHidden={isHidden}>
      <SideConentbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          {/* 다른 라우트 설정 */}
        </Routes>
      </SideConentbar>
      <SideBtn onClick={handleSideContentBar}>
        {!isHidden ? <FaAngleRight /> : <FaAngleLeft />}
      </SideBtn>
    </SideContentWrapper>
  );
}
