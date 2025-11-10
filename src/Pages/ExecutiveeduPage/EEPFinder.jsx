import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Plus } from "lucide-react";

function EEPFinder() {
    const [showCourseDropdown, setShowCourseDropdown] = useState(false);
    const [showDurationDropdown, setShowDurationDropdown] = useState(false);
    const [showFormatDropdown, setShowFormatDropdown] = useState(false);

    const [selectedCourses, setSelectedCourses] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [selectedFormats, setSelectedFormats] = useState([]);

    const courses = ["Executive PhD", "Leadership coaching"];
    const durations = ["1 Month", "3 Months", "6 Months", "1 Year"];
    const formats = ["Online", "Offline"];

    const handleToggle = (value, setter) => {
        setter((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    return (
        <div
            data-aos="fade-down"
            className="hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-lg-start p-3 p-lg-5 mt-5"
            style={{
                backgroundImage: `url(https://execed.isb.edu/content/dam/sites/cee/images/Group%201182.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "40vh",
            }}
        >
            <div className="w-100 w-lg-75 w-lg-50 ms-lg-5" data-aos="fade-right">
                <h3 className="fw-bold fs-2 fs-lg-1">Programme Finder:</h3>
                <p>Find a programme suited to help meet your professional goals.</p>

                {/* Course Dropdown */}
                <div className="course-select-container mb-3 position-relative">
                    <Form.Control
                        type="text"
                        placeholder="Select Course"
                        readOnly
                        value={selectedCourses.join(", ")}
                        onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                        className="course-input"
                    />
                    <Plus
                        size={20}
                        className="plus-icon position-absolute end-0 top-50 translate-middle-y me-2"
                        onClick={() => setShowCourseDropdown(!showCourseDropdown)}
                    />
                    {showCourseDropdown && (
                        <div className="course-dropdown p-3 drop-down-format rounded mt-1">
                            {courses.map((course) => (
                                <Form.Check
                                    key={course}
                                    type="checkbox"
                                    id={course}
                                    label={course}
                                    checked={selectedCourses.includes(course)}
                                    onChange={() => handleToggle(course, setSelectedCourses)}
                                    className="course-option"
                                />
                            ))}
                            <div className="d-flex justify-content-center align-items-center">
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={() => setShowCourseDropdown(false)}
                                className="done-btn mt-2"
                            >
                                Done
                            </Button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="duration-time-eep-finder">
                    {/* Duration Dropdown */}
                    <div className="course-select-container mb-3 position-relative d-flex gap-2 align-items-center">
                        <p className="mb-0">During</p>
                        <Form.Control
                            type="text"
                            placeholder="Select Duration"
                            readOnly
                            value={selectedDurations.join(", ")}
                            onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                            className="course-input"
                        />
                        <Plus
                            size={20}
                            className="plus-icon position-absolute end-0 top-50 translate-middle-y me-2"
                            onClick={() => setShowDurationDropdown(!showDurationDropdown)}
                        />
                        {showDurationDropdown && (
                            <div className="course-dropdown drop-down-format p-3 rounded mt-1">
                                {durations.map((duration) => (
                                    <Form.Check
                                        key={duration}
                                        type="checkbox"
                                        id={duration}
                                        label={duration}
                                        checked={selectedDurations.includes(duration)}
                                        onChange={() => handleToggle(duration, setSelectedDurations)}
                                        className="course-option"
                                    />
                                ))}
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => setShowDurationDropdown(false)}
                                    className="done-btn mt-2"
                                >
                                    Done
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Format Dropdown */}
                    <div className="course-select-container mb-3 position-relative d-flex align-items-center">
                        <p className="mb-0">In the format</p>
                        <Form.Control
                            type="text"
                            placeholder="Select Format"
                            readOnly
                            value={selectedFormats.join(", ")}
                            onClick={() => setShowFormatDropdown(!showFormatDropdown)}
                            className="course-input"
                        />
                        <Plus
                            size={20}
                            className="plus-icon position-absolute end-0 top-50 translate-middle-y me-2"
                            onClick={() => setShowFormatDropdown(!showFormatDropdown)}
                        />
                        {showFormatDropdown && (
                            <div className="course-dropdown drop-down-format p-3 rounded mt-1">
                                {formats.map((format) => (
                                    <Form.Check
                                        key={format}
                                        type="checkbox"
                                        id={format}
                                        label={format}
                                        checked={selectedFormats.includes(format)}
                                        onChange={() => handleToggle(format, setSelectedFormats)}
                                        className="course-option"
                                    />
                                ))}
                                <Button
                                    variant="primary"
                                    size="sm"
                                    onClick={() => setShowFormatDropdown(false)}
                                    className="done-btn mt-2"
                                >
                                    Done
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <Button className="mt-3 px-5" style={{backgroundColor:"#5ac501",border:"none"}}>
                    Search
                </Button>
            </div>
        </div>
    );
}

export default EEPFinder;
