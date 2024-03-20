import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Welcome extends Component {
    render() {
        return (
            <div className={"all"}>
                <div className={"welcome"}>
                    <div className={"text2a"}>
                        <span className={"title2"}>Welcome to Pop Design</span>
                        <img src={"./image/welcome-1.jpg"}/>
                        <span>You are allowed to download, modify and use this template for your commercial or business websites.</span>
                        <span>Please tell your friends about <Link to={"https://www.facebook.com/tooplate"} style={{textDecoration:"none"}}>Tooplate</Link>. That will be very helpful for us. Thank you.</span>
                    </div>
                    <div className={"text2b"}>
                        <span>You are NOT allowed to put this template ZIP file for a download purpose on any template collection website.</span>
                        <span>If you have any kind of question or comment, please feel free to <Link to={"https://www.tooplate.com/contact"} style={{textDecoration:"none"}}> contact us </Link>. You are welcome.</span>
                        <img src={"./image/welcome-2.jpg"}/>
                    </div>
                    <div><Link to={'/'} className={"x"}><i className="fa fa-times" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        );
    }
}

export default Welcome;