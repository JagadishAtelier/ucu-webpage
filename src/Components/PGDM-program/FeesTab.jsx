import React from "react";
import FeesParticipants from "./FeesTab/FeesParticipants";

function FeesTab() {
    return (
        <>
        <div className=" my-1 p-3">
            <h1 className="display-4 fw-bold col-12 col-lg-12"><span style={{color:"#5ac501"}}>PG </span>Fee Structure</h1>
        </div>
        <div className="my-1" style={{backgroundColor:"#00000086", borderRadius:"8px", }}>
            <FeesParticipants />
        </div>
        <div className="my-4 p-3">
            <h1 className="display-4 fw-bold col-12 col-lg-12"><span style={{color:"#5ac501"}}>Financial assistance </span>and scholarships</h1>
        </div>
        </>
    );
}

export default FeesTab;