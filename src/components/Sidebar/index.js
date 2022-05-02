import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="awards" onClick={toggle}>
                        Awards
                    </SidebarLink>
                    <SidebarLink to="roles" onClick={toggle}>
                        Roles
                    </SidebarLink>
                    <SidebarLink to="testimonials" onClick={toggle}>
                        Testimonials
                    </SidebarLink>
                    <SidebarLink to="equipment" onClick={toggle}>
                        Equipment
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    {/* <SidebarRoute to='/description'>
                        Sign In
                    </SidebarRoute> */}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;