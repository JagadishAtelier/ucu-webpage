import React from "react";
import "./NotFoundPage.css";

function NotFoundPage() {
    return (
        <div className="error-container">
            <h2 className="error-label">ERROR</h2>

            <div className="main-display">
                {/* Left Pixel 4 */}
                <div className="pixel-4">
                    <div></div>
                </div>

                {/* Robot Face (0) */}
                <div className="robot-face">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                    <div className="mouth"></div>
                </div>

                {/* Right Pixel 4 */}
                <div className="pixel-4">
                    <div></div>
                </div>
            </div>

            <h2 className="error-label">UCU WEBSITE NOT LIVE NOW</h2>
            <h2 className="error-label">Contact Atelier Technologies</h2>
        </div>
    );
}

export default NotFoundPage;