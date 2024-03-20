import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Contact extends Component {
    handleSearch=async (ev)=>{
        ev.preventDefault()
    }
    render() {
        return (
            <div className={"all"}>
                <div className={"contact"}>
                    <div className={"text5"}>
                        <span className={"title5"}>Contact Us</span>
                        <span>Lorem ipsum dolor site amet, consectetur adipiscing elit. Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero.</span>
                        <form onSubmit={this.handleSearch}>
                            <input type={"text"} placeholder={"Name"}/>
                            <input type={"email"} placeholder={"Email"}/>
                        </form>
                        <textarea placeholder={"Message"}></textarea>
                        <button className={"but5"}>Submit</button>
                    </div>
                    <div><Link to={'/'} className={"x"}><i className="fa fa-times" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        );
    }
}

export default Contact;