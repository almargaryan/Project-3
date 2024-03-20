import React, {Component} from 'react';
import {Link} from "react-router-dom";

class LinksPage extends Component {
    render() {
        return (
            <div className={"menu"}>
                <div className={"icons"}>
                    <Link to={'/welcome'} style={{textDecoration:"none"}}><i className="fa fa-home" aria-hidden="true"><h4>Welcome</h4></i></Link>
                    <Link to={'/our-team'} style={{textDecoration:"none"}}><i className="fa fa-users" aria-hidden="true"><h4>Our Team</h4></i></Link>
                </div>
                <div className={"icons"}>
                    <Link to={'/our-work'} style={{textDecoration:"none"}}><i className="fa fa-handshake-o" aria-hidden="true"><h4>Our Work</h4></i></Link>
                    <Link to={'/contact'} style={{textDecoration:"none"}}><i className="fa fa-comments" aria-hidden="true"><h4>Contact</h4></i></Link>
                </div>
            </div>
        );
    }
}

export default LinksPage;