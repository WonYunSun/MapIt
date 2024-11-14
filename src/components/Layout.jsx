import SideContent from "./SideContent";
import SideMenu from "./SideMenu";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
const SideWrapper = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: fit-content;
  z-index: 1002; /* SideWrapper에만 z-index 설정 */
`;
const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <SideWrapper>
        <SideMenu />
        <SideContent></SideContent>
      </SideWrapper>
      <main>{children}</main>
    </BrowserRouter>
  );
};

export default Layout;
