import React from "react";

function ClientProfile() {
    const levels = [
        "Senior Vice President",
        "Chief of Strategy",
        "Head of nursing",
        "Chief of Supply Planning and Admin",
        "Chief of Sales",
        "Director",
        "Executive Director",
        "Asst. Vice President",
        "Senior Manager",
    ];

    const brands = [
        { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Intel", logo: "https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg" },
        { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/archive/6/61/20210930181848%21Samsung_old_logo_before_year_2015.svg" },
        { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/960px-Sony_logo.svg.png" },
        { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
        { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
        { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" },
        { name: "Cisco", logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg" },
    ];

    return (
        <div className="clientProfile-section mt-5">
            <h1 className="clientProfile-heading ps-5">Clients Profile</h1>
            <div className="clientProfile-container">
                {/* LEFT */}
                <div className="clientProfile-left">

                    <div className="clientProfile-box">
                        <h4 className="clientProfile-subtitle">Levels</h4>

                        <ul className="clientProfile-list">
                            {levels.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>

                        <div className="clientProfile-logos">
                            {brands.map((logo, index) => (
                                <div className="clientProfile-logoBox" key={index}>
                                    <img
                                        src={logo.logo}
                                        alt="client logo"
                                        className="clientProfile-logo"
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="clientProfile-right">
                    <h3 className="clientProfile-testimonial-title">
                        Transformational Journey
                    </h3>

                    <p className="clientProfile-testimonial-text">
                        “I had an extremely valuable experience during coaching sessions
                        with Vijayashree. Throughout our engagement, she encouraged me to
                        introspect and look beyond the current. She showed extreme level of
                        professionalism. One of the first and most important things in these
                        sessions is that you can open up, and she really handled the
                        conversations with extreme maturity. I am grateful for the
                        opportunity to have worked with her.”
                    </p>

                    <p className="clientProfile-author">
                        — Animesh Sinha, Chief of Strategy, Tata Steel
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ClientProfile;
