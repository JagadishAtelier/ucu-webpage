import React from "react";
import { ProgressBar } from "react-bootstrap";

function BPPSpecializations() {
    const progress = 70; // example percentage

    return (
        <div style={{ width: "60%", margin: "20px auto" }}>
            <h4>Specialization Progress</h4>
            <div className="position-relative">
                <ProgressBar
                    now={progress}
                    label={<span style={{ float: "right", paddingRight: "5px" }}>{progress}%</span>}
                    striped
                    animated
                    className="BPP-progress-bar"
                />
                <p className="position-absolute top-0 end-0 me-4">jj</p>
            </div>
        </div>
    );
}

export default BPPSpecializations;
