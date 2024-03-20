import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OurTeam extends Component {
    render() {
        return (
            <div className={"all"}>
                <div className={"team"}>
                    <div className={"text3"}>
                        <span className={"title3"}>Background of Our Team</span>
                        <span>Vestibulum aliquet, arcu accumsan lobortis bibendum, justo velit efficitur lorem, at pulvinar mi justo nec lacus. Nullam et libero aliquet, luctus nunc sit amet, tincidunt ligula. Sed finibus ante sed tortor cursus, nec malesuada lectus interdum.</span>
                        <span>Sed ex turpis, vulputate in efficitur id, lobortis eget nibh. Pellentesque maximus ipsum eget velit imperdiet sodales. Suspendisse in blandit mi.</span>
                        <span>Pellentesque finibus felis risus, ut malesuada felis viverra at. Quisque accumsan in mi non hendrerit.</span>
                        <button className={"but3"}>Read More</button>
                    </div>
                    <div className={"img3"}></div>
                    <div><Link to={'/'} className={"x"}><i className="fa fa-times" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        );
    }
}

export default OurTeam;