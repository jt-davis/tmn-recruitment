import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <h1>TMN</h1>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                                <NavLinks to="awards" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                                Awards
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="roles" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                                Roles
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="testimonials" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                                Testimonials
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="equipment" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active">
                                Equipment
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/description">
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;