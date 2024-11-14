import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const SideMenubar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 65px;
  height: 100%;
  z-index: 1003;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 1px;
    background-color: rgb(217, 217, 217);
  }
`;

const StyledMenu = styled.button`
  height: 60px;
  padding: 13px 1px 11px 0px;
  color: rgb(51, 51, 51);
  width: 62px;
  font-size: 13px;
  &:hover,
  &:hover span {
    color: blue;
  }
`;
const StyledProfileContainer = styled.div`
  padding: 30px 10px;
`;

const StyledProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc; /* 배경 색상 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: flex; /* flex로 설정하여 내부 요소들을 세로로 정렬 */
  flex-direction: column; /* 세로 방향으로 정렬 */
  justify-content: center; /* 세로 중앙 정렬 */
  align-items: center; /* 가로 중앙 정렬 */
`;

const SidebarMenu = ({ text, icon, to }) => {
  return (
    <StyledMenu>
      <StyledLink to={to}>
        <span>{icon}</span>
        <span>{text}</span>
      </StyledLink>
    </StyledMenu>
  );
};
export default function SideMenu() {
  return (
    <SideMenubar>
      <div>
        <SidebarMenu text="로고 영역" to="/" />
        <SidebarMenu text="지도 홈" icon={<FaLocationDot size={25} />} to="/" />
        <SidebarMenu
          text="북마크"
          icon={<FaBookmark size={23} />}
          to="/bookmarks"
        />
      </div>
      <StyledProfileContainer>
        <StyledProfile />
      </StyledProfileContainer>
    </SideMenubar>
  );
}
