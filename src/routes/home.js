import { h } from "preact";
import { styled } from "linaria/react";

const Div = styled.div`
    padding: 56px 20px;
    min-height: 100%;
    width: 100%;
`;

const Home = () => (
    <Div>
        <h1>Home</h1>
        <p>This is one of the Home component.</p>
        <p> Testing</p>
    </Div>
);

export default Home;
