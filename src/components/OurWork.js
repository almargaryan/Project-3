import React, {Component} from 'react';
import Carousel from "nuka-carousel";
import {Link} from "react-router-dom";

class OurWork extends Component {
    render() {
        return (
            <div className={"all"}>
                <div className={"work"}>
                    <div className={"text4"}>
                        <span className={"title4"}>Our Work</span>
                        <span>Aliquam interdum, nisl sed faucibus tempor, massa velit laoreet ipsum, et faucibus sapien magna at enim. Suspendisse a dictum tortor, vel rhoncus libero. Integer at lacus velit. Nullam dapibus venenatis placerat.</span>
                    </div>
                    <div className={"carousel"}>
                        <Carousel wrapAround={true} slidesToShow={4} slidesToScroll={3} className={"carousel"}>
                            <img src={"./image/gallery-img-01-tn.jpg"} width={"150px"} height={"150px"}/>
                            <img src={"./image/gallery-img-02-tn.jpg"} width={"150px"} height={"150px"}/>
                            <img src={"./image/gallery-img-03-tn.jpg"} width={"150px"} height={"150px"}/>
                            <img src={"./image/gallery-img-04-tn.jpg"} width={"150px"} height={"150px"}/>
                            <img src={"./image/gallery-img-05-tn.jpg"} width={"150px"} height={"150px"}/>
                            <img src={"./image/gallery-img-06-tn.jpg"} width={"150px"} height={"150px"}/>
                        </Carousel>
                    </div>
                    <div><Link to={'/'} className={"x"}><i className="fa fa-times" aria-hidden="true"></i></Link></div>
                </div>
            </div>
        );
    }
}

export default OurWork;