import React, { useState } from "react";
import image from "../../../Assets/aboutPageImage/vision_image1.jpg";

function OverviewIndustryconnect() {
    return (
        <div className="container my-1 p-3">
            <h1 className="display-4 fw-bold col-12 col-lg-12 my-4"><span style={{color:"#5ac501"}}>Industry </span>connect</h1>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div>
                        <img src={image} alt="" height={285} width={600} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <p className="font-weight-normal">
                        At IndustryConnect, we strive to create a platform that empowers businesses to connect with their customers, share their expertise, and create lasting relationships. By providing a seamless and user-friendly experience, we aim to foster collaboration, innovation, and growth within the industry.
                    </p>
                    <p className="font-weight-normal">
                        Our mission is to help businesses reach their full potential by offering a platform that supports them to build stronger, more innovative connections with their customers, share their expertise, and create lasting relationships. By focusing on providing a seamless and user-friendly experience, we aim to foster collaboration, innovation, and growth within the industry.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <p className="font-weight-normal">
                        By focusing on providing a seamless and user-friendly experience, we aim to foster collaboration, innovation, and growth within the industry. By providing a seamless and user-friendly experience, we aim to foster collaboration, innovation, and growth within the industry.
                    </p>
                    <p className="font-weight-normal">
                        Our mission is to help businesses reach their full potential by offering a platform that supports them to build stronger, more innovative connections with their customers, share their expertise, and create lasting relationships.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OverviewIndustryconnect;