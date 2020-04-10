import { h } from "preact";
import { Link, activeClassName } from "preact-router/match";
import { styled } from "linaria/react";


const StyledHeader = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 56px;
    padding: 0;
    background: #673ab7;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    z-index: 50;
`;

const H1 = styled.h1`
    float: left;
    margin: 0;
    padding: 0 15px;
    font-size: 24px;
    line-height: 56px;
    font-weight: 400;
    color: #fff;
`;

const Nav = styled.nav`
    float: right;
    font-size: 100%;

    a {
        display: inline-block;
        height: 56px;
        line-height: 56px;
        padding: 0 15px;
        min-width: 50px;
        text-align: center;
        background: rgba(255, 255, 255, 0);
        text-decoration: none;
        color: #fff;
        will-change: background-color;

        &:hover,&:active{
        background: rgba(0, 0, 0, 0.2);
        }

        &.active{
        background: rgba(0, 0, 0, 0.4);
        }
    }
`;

const Header = () => (
    <StyledHeader>
        <H1>Preact App</H1>
        <Nav>
            <Link activeClassName="active"  href="/">
                Home
            </Link>
            <Link activeClassName="active"  href="/profile">
                Me
            </Link>
            <Link activeClassName="active"  href="/profile/john">
                John
            </Link>
        </Nav>
    </StyledHeader>
);

export default Header;
