import React, {Component} from 'react';
import LinksPage from "./LinksPage";

class Background extends Component {
    render() {
        return (
            <div className={"all"}>
                <div className={"text1"}>
                    <span className={"title1"}>POP design</span>
                    <div className={"line"}>
                        <div className={"narrow"}></div>
                        <div className={"bold"}></div>
                    </div>
                    <span>New HTML Template with pop up pages and use this layout for your website</span>
                </div>
                <div><LinksPage/></div>
            </div>
        );
    }
}

export default Background;