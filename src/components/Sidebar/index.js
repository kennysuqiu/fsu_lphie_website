import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarMenu, SidebarRoute } from "./SidebarElements";
const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="history" onClick={toggle} offset={-80}>
            History
          </SidebarLink>
          <SidebarLink to="chapters" onClick={toggle} offset={-80}>
            Chapters
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle} offset={-80}>
            About Us
          </SidebarLink>
          <SidebarLink to="executives" onClick={toggle} offset={-80}>
            Executives
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle} offset={-80}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
