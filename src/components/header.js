import { h } from "preact";
import { Link, activeClassName } from "preact-router/match";
import styled, { css } from "styled-components";

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
`;

//activeClassName doesn't work for some reason
const StyledLink = styled(Link)`
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

    &:hover,&:${props =>props.activeClassName}{
    background: rgba(0, 0, 0, 0.2);
    }

    &.${(props) => props.activeClassName}{
    color:red;
    background: rgba(0, 0, 0, 0.4);
    }
`;


const Header = () => (
    <StyledHeader>
        <H1>Preact App</H1>
        <Nav>
                <StyledLink activeClassName="active" href="/">Home</StyledLink>
                <StyledLink activeClassName="active" href="/profile">Me</StyledLink>
                <StyledLink activeClassName="active" href="/profile/john">John</StyledLink>
        </Nav>
    </StyledHeader>
);

export default Header;
