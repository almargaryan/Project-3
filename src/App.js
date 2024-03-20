import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Background from "./components/Background";
import Welcome from "./components/Welcome";
import OurTeam from "./components/OurTeam";
import OurWork from "./components/OurWork";
import Contact from "./components/Contact";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Background/>}/>
                    <Route path={'/welcome'} element={<Welcome/>}/>
                    <Route path={'/our-team'} element={<OurTeam/>}/>
                    <Route path={'/our-work'} element={<OurWork/>}/>
                    <Route path={'/contact'} element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default App;