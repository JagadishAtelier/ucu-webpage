import React from "react";
import PGPMBottomBanner from "../../Pages/PGPMProgram/PGPMBottomBanner";
import CareerRobatApply from "./CareerRobatApply";
import CareerRobatFeatures from "./CareerRobatFeatures";
import CRPFWFlow from "./CRPFWFlow";
import { BookOpen, UserCog } from "lucide-react";

export default function CareerRobatOverview({ getKeyValue, getArray, getImage }) {
    const kv = (key, fallback) => (getKeyValue ? getKeyValue("CareerRobatOverview", key, fallback) : fallback);

    const titleStart = kv("titleStart", "About");
    const titleSpan = kv("titleSpan", "Career Reboot Program for Women");
    const description = kv("description", "UCU’s Career Reboot Program for Women is aimed at re-equipping women on a career break into high impact roles in the corporate world. The 6-month program combines classroom learning with hands-on experience via live projects, thereby giving updated industry and corporate overview to candidates.");

    const btn1Text = kv("btn1Text", "Download Curriculum");
    const btn2Text = kv("btn2Text", "Download Class Profile");

    return (
        <>
            <div className="container my-1 p-3">
                <div className="row">
                    <h1 className="display-5 mb-4 fw-bold col-12 col-lg-12">
                        {titleStart} <span style={{ color: "#5ac501" }}> {titleSpan}</span>
                    </h1>
                    <p style={{ textAlign: "justify" }}>
                        {description}
                    </p>
                </div>
            </div>
            <div className="container p-3">
                <CareerRobatApply getKeyValue={getKeyValue} getArray={getArray} />
            </div>

            <div className="container overflow-visible">
                <CareerRobatFeatures getKeyValue={getKeyValue} getArray={getArray} />
            </div>
            <div className="container overflow-visible">
                <CRPFWFlow getKeyValue={getKeyValue} getArray={getArray} />
            </div>
            <div className="pgxpm-download-actions d-flex flex-column flex-md-row gap-4 mt-5 justify-content-center mb-5">
                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <BookOpen size={20} />
                    </div>
                    <span>{btn1Text}</span>
                </button>

                <button className="btn pgxpm-download-btn d-flex align-items-center justify-content-center gap-3">
                    <div className="icon-box">
                        <UserCog size={20} />
                    </div>
                    <span>{btn2Text}</span>
                </button>
            </div>
        </>
    );
}
