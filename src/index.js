import { h, Component } from "preact";
import { Router } from "preact-router";
import Theme from "./themes.js";
import style from './style.css';

import Header from "./components/header.js";

// Code-splitting is automated for routes
import Home from "./routes/home.js";
import Profile from "./routes/profile.js";

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
