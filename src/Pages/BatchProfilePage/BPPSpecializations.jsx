import React from "react";
import { ProgressBar } from "react-bootstrap";

function BPPSpecializations() {
    // College-related courses with progress
    const courses = [
        { name: "B.Com ", progress: 70 },
        { name: "B.A ", progress: 50 },
        { name: "B.Sc ", progress: 80 },
        { name: "BBA ", progress: 60 },
        { name: "BCA", progress: 40 }
    ];

    const companies = [
        "Apple Inc.",
        "Microsoft Corporation",
        "Amazon.com, Inc.",
        "Alphabet Inc. (Google)",
        "Meta Platforms, Inc. (Facebook)",
        "Tesla, Inc.",
        "Berkshire Hathaway Inc.",
        "Johnson & Johnson",
        "JPMorgan Chase & Co.",
        "Exxon Mobil Corporation",
        "Walmart Inc.",
        "Procter & Gamble Co.",
        "Intel Corporation",
        "The Coca-Cola Company",
        "PepsiCo, Inc.",
        "IBM Corporation",
        "Samsung Electronics Co., Ltd.",
        "Oracle Corporation",
        "Cisco Systems, Inc.",
        "Nike, Inc."
    ];

    return (
        <div className='captital-campus-content-sec mt-5 d-flex flex-lg-row flex-column gap-5'>
            <div className="col-lg-6 col-12">
                <h4 className="mb-4">Specialization Progress</h4>
                <div className="d-flex flex-column gap-3">
                {courses.map((course, index) => (
                    <div className="position-relative mb-3" key={index}>
                        <ProgressBar
                            now={course.progress}
                            label={<span style={{ float: "right", paddingRight: "5px",fontWeight:"bold",fontSize:"1rem" }}>{course.progress}%</span>}
                            striped
                            animated
                            className="BPP-progress-bar"
                        />
                        <p className="position-absolute top-0 end-0 me-4 mb-0">{course.name}</p>
                    </div>
                ))}
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <h4 className="mb-4">Some Organizations Our Students Come From*</h4>
                <ul className="two-column-list">
                    {companies.map((company, index) => (
                        <li key={index}>{company}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BPPSpecializations;
