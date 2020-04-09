import { h, Component } from "preact";
import { Router } from "preact-router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Theme from "./themes.js";

import Header from "./components/header.js";

// Code-splitting is automated for routes
import Home from "./routes/home.js";
import Profile from "./routes/profile.js";

const GlobalStyle = createGlobalStyle`
html,
body {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    background: #fafafa;
    font-family: "Helvetica Neue", arial, sans-serif;
    font-weight: 400;
    color: #444;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

* {
    box-sizing: border-box;
}

#app {
    height: 100%;
}
`;
export default class App extends Component {
    /** Gets fired when the route changes.
     *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
     *	@param {string} event.url	The newly routed URL
     */
    handleRoute = e => {
        this.currentUrl = e.url;
    };

    render() {
        return (
            <Theme>
                <div id="app">
                    <GlobalStyle />
                    <Header />
                    <Router onChange={this.handleRoute}>
                        <Home path="/" />
                        <Profile path="/profile/" user="me" />
                        <Profile path="/profile/:user" />
                    </Router>
                </div>
            </Theme>
        );
    }
}
