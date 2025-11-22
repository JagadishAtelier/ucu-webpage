export const menuData = [
  // 🔝 Top Menu
  { label: "Home", link: "/", placement: "top" },
  {
    label: "Partnership",
    placement: "top",
    submenu: [
      {
        label: "corporate Engagement",
        submenu: [
          {
            label: "Career Accelerator Program (CAP)",
            link: "/engagement/cap",
          },
          {
            label: "Career Transformation to Career Acceleration (CT 2 CA)",
            link: "/engagement/ct-to-ca",
          },
          {
            label: "CXO Series",
            submenu: [
              { label: "CIO ", link: "/engagement/cio" },
              { label: "CTO ", link: "/engagement/cto" },
              { label: "CMO ", link: "/engagement/cmo" },
              { label: "CHRO", link: "/engagement/chro" },
              { label: "CFO ", link: "/engagement/cfo" },
              { label: "CPO ", link: "/engagement/cpo" },
            ],
          },
        ],
      },
      {
        label: "Strategic Collaborations",
        submenu: [
          { label: "Strategic Partners", link: "/strategic/partners" },
          { label: "International Collaborations", link: "/strategic/collaborations" },
          { label: "Industry Partners", link: "/strategic/Industry-partners" },
          {
            label: "Centers of Excellence (CoEs)",
            submenu: [
              {
                label: "Marketing",
                link: "/coe/marketing",
              },
              {
                label: "Finance",
                link: "/coe/finance",
              },
              {
                label: "Operations",
                link: "/coe/operations",
              },
              {
                label: "Analytics, Data & AI",
                link: "/coe/analytics-ai",
              },
              {
                label: "Consulting",
                link: "/coe/consulting",
              },
              {
                label: "Entrepreneurship",
                link: "/coe/entrepreneurship",
              },
              {
                label: "Emerging Enterprise & Innovation (EEI)",
                link: "/coe/EmergingEnterpriseInnovation",
              },
              {
                label: "Faculty Chairs",
                link: "/coe/FacultyChairs",
                className: "rainbow-link"
              },
            ],
          },
        ],
      },
    ],
  },
  { label: "Campus", link: "/campus-ambience", placement: "top" },
  {
    label: "Consortium",
    link: "/consortium",
    placement: "top",
  },
  // { label: "Societal impact", link: "/csr", placement: "top" },
  // {
  //   label: "Budding Talent",
  //   placement: "top",
  //   submenu: [
  //     { label: "Open Programs", link: "/open-programs" },
  //     { label: "Summer Programs", link: "/summer-programs" },
  //   ],
  // },
  { label: "Careers", link: "/careers", placement: "top" },
  {
    label: "Media", placement: "top",
    submenu: [
      { label: "UCU Chennai in the Media", link: "/media/ucu-media" },
      { label: "What’s on at UCU Chennai", link: "/media/ucu-on-at" },
      { label: "Gallery", link: "/media/gallery" },
      { label: "UCU Chennai Blog", link: "/media/blog" },
    ]
  },
  // { label: "contact", link: "/contact", placement: "top" },
  {
    label: "Contact Us",
    link: "/contact-us",
    placement: "top",
  },

  // ✅ Industry Partnership (Merged)
  {
    label: "Online Programs",
    placement: "top",
    submenu: [
      { label: "Digital Marketing & AI", link: "/program/Digital-Marketing-AI" },
      { label: "Product Management", link: "/program/Product-Management" },
      { label: "Cybersecurity", link: "/program/Cybersecurity" },
      {
        label: "AIMA AICTE Approved PGDM",
        link: "/program/AIMA-AICTE-Approved-PGDM",
      },
    ],
  },

  // 🧭 Nav Bar (Main Menu - Bottom Placement)
  {
    label: "About",
    placement: "bottom",
    submenu: [
      { label: "Our Story", scrollId: "our-story" },
      { label: "Vision & Mission", scrollId: "vision-mission" },
      { label: "Founder's Message", link: "/founder-message" },
      { label: "Leadership", link: "/leader-ship" },
      { label: "Industry First Approach", link: "/industry-approach" },
    ],
  },

  {
    label: "Programs",
    placement: "bottom",
    submenu: [
      {
        label: "Full Time Programs",
        submenu: [
          { label: "PGPM ELITE | Career Accelerator Program", link: "/program/pgpm-elite" },
          { label: "PGDM | Young Leaders' Program", link: "/program/pgdm" },
          {
            label: "Flexi Program",
            className: "sublink-custom",
            submenu: [
              { label: "PGPM Flex", link: "/program/pgpm" },
              { label: "PGXPM ", link: "/program/pgxpm" },
            ],
          },
          // {
          //   label: "Executive Post Graduate Certificate Programs",
          //   link: "/program/executive-pgcp",
          // },
          {
            label: "Career Reboot Program for Women",
            link: "/program/career-reboot",
            className: "sublink-custom",
          },
        ],
      },

      {
        label: "Executive Post Graduate Certificate Programmes",
        link: "/program/career-reboot",
        submenu: [
          {
            label: "Functional Specialization",
            link: "/program/functional-certifications",
            submenu: [
              { label: "Sales", link: "/program/sales" },
              {
                label: "Product",
                link: "/program/product",
              },
              { label: "Consulting", link: "/program/consulting" },
              { label: "Cybersecurity", link: "/program/cybersecurity" },
              {
                label: "Digital Marketing & AI",
                link: "/program/dm-ai",
              },
              { label: "Banking & Finance", link: "/program/banking-finance" },
            ],
          },
          {
            label: "Industry Sector Specialization",
            link: "/program/industry-sector",
            submenu: [
              { label: "FinTech Genesis", link: "/program/fintech" },
              {
                label: "GCC Launchpad",
                link: "/program/gcc",
              },
              {
                label: "HealthTech Ignition",
                link: "/program/HealthTech-Ignition",
              },
              {
                label: "Advanced Manufacturing",
                link: "/program/Advanced-Manufacturing",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Executive Education",
    placement: "bottom",
    submenu: [
      {
        label: "Customised Learning Programs for Corporate Professionals",
        link: "/executive-edu",
        submenu: [
          {
            label: "Management Development Programs (MDPs)",
            link: "/program/MDPs",
            className: "sublink-custom",
            customHover: false,
          },
          {
            label: "Industry Sector",
            className: "sublink-custom",
            customHover: false,
            submenu: [
              {
                label: "FinTech Ascend",
                link: "/program/FinTech-Ascend",
                customHover: false,
              },
              {
                label: "FinTech Vanguard",
                link: "/program/FinTech-Vanguard",
                customHover: false,
              },
              {
                label: "GCC-Catalyst",
                link: "/program/GCC-Catalyst",
                customHover: false,
              },
              {
                label: "GCC Elevate",
                link: "/program/GCC-Elevate",
                customHover: false,
              },
              {
                label: "HealthTech Navigate",
                link: "/program/HealthTech-Navigate",
                customHover: false,
              },
              {
                label: "HealthTech Pinnacle",
                link: "/program/HealthTech-Pinnacle",
                customHover: false,
              },
            ]
          },
        ],
      },
      {
        label: "1 Year CXO Accelerator Program with Campus Immersion",
        submenu: [
          { label: "CXO", link: "/program/CXO" },
          { label: "CIO", link: "/program/CIO" },
          { label: "CTO", link: "/program/CTO" },
          { label: "CMO", link: "/program/CMO" },
          { label: "CHRO", link: "/program/CHRO" },
          { label: "CFO", link: "/program/CFO" },
          { label: "CPO", link: "/program/CPO" },
        ],
      },
    ],
  },
  {
    label: "Faculty",
    placement: "bottom",
    submenu: [
      { label: "Sales & Marketing", link: "/faculty/sales-marketing" },
      { label: "Finance", link: "/faculty/finance" },
      {
        label: "Operations & Supply Chain",
        link: "/faculty/operations-supply-chain",
      },
      { label: "Analytics & AI", link: "/faculty/analytics-AI" },
      { label: "Consulting", link: "/faculty/consulting" },
      { label: "Product", link: "/faculty/product" },
      {
        label: "Business Communications & Others",
        link: "/faculty/business-communications-others",
      },
    ],
  },

  {
    label: "Advisory Councils",
    placement: "bottom",
    submenu: [
      {
        label: "Business Advisory Council",
        link: "/bac",
        submenu: [
          {
            label: "Academic Advisory Council",
            link: "/aac",
            className: "sublink-custom",
          },
          {
            label: "CHRO Advisory Council",
            link: "/chro",
            className: "sublink-custom",
          },
          {
            label: "Talent Advisory Council",
            link: "/tac",
            className: "sublink-custom",
          },
          {
            label: "L&D Advisory Council",
            link: "/ldac",
            className: "sublink-custom",
          },
          {
            label: "Young CXO Council",
            link: "/ycxoc",
            className: "sublink-custom",
          },
          {
            label: "Rising Leaders' Council",
            link: "/rlc",
            className: "sublink-custom",
          },
          {
            label: "Our Brand Ambassadors",
            link: "/oba",
            className: "sublink-custom",
          },
        ],
      },

      {
        label: "SME Program Advisory Council",
        submenu: [
          { label: "Sales Advisory Council", link: "/sac" },
          { label: "Product Management Advisory Council", link: "/pmac" },
          { label: "Cybersecurity Advisory Council", link: "/cac" },
          { label: "FinTech Advisory Council", link: "/ftac" },
          { label: "GCC Advisory Council", link: "/gccac" },
          {
            label: "Mobility & Sustainability Advisory Council",
            link: "/msac",
          },
          { label: "Consulting Advisory Council", link: "/conac" },
        ],
      },
    ],
  },

  {
    label: "Admissions",
    link: "/admissions",
    placement: "bottom",
  },

  {
    label: "Campus Placements",
    placement: "bottom",
    specialDropdown: "campusDropdown",
    submenu: [
      { label: "Recruiting Partners", link: "/placements/recruiters",image:"https://img.freepik.com/free-photo/business-team-joining-hands-teamwork-concept_1163-1636.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" },
      { label: "Placement Reports", link: "/placements/reports",image:"https://img.freepik.com/free-photo/smiley-business-man-checking-clipboard_23-2148514864.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" },
      { label: "Corporate Testimonials", link: "/placements/testimonials",image:"https://img.freepik.com/free-photo/discussing-business-plan_1098-15154.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" },
      { label: "Summer Internships", link: "/placements/internships",image:"https://img.freepik.com/free-photo/handsome-guy-study-grass_1157-22223.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" },
      { label: "Live Projects", link: "/placements/projects",image:"https://img.freepik.com/free-photo/happy-entrepreneur-analyzing-business-chart-web-conference-home_637285-12739.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80" },
    ],
  },
];
export const menuDataMobile = [
  // 🔝 Top Menu
  { label: "Home", link: "/", placement: "top" },
  {
    label: "About",
    placement: "bottom",
    link: "/about-ucu",
    submenu: [
      { label: "Our Story", scrollId: "our-story" },
      { label: "Vision & Mission", scrollId: "vision-mission" },
      { label: "Founder's Message", link: "/founder-message" },
      { label: "Leadership", link: "/leader-ship" },
      { label: "Industry First Approach", link: "/industry-approach" },
    ],
  },

  {
    label: "Programs",
    link: "/program",
    placement: "bottom",
    submenu: [
      {
        label: "Full Time Programs",
        submenu: [
          { label: "PGPM-ELITE", link: "/program/pgpm-elite" },
          { label: "PGDM", link: "/program/pgdm" },
          {
            label: "Flexi Program",
            className: "sublink-custom",
            submenu: [
              { label: "PGPM Flex", link: "/program/pgpm" },
              { label: "PGXPM ", link: "/program/pgxpm" },
            ],
          },
          // {
          //   label: "Executive Post Graduate Certificate Programs",
          //   link: "/program/executive-pgcp",
          // },
          {
            label: "Career Reboot Program for Women",
            link: "/program/career-reboot",
            className: "sublink-custom",
          },
        ],
      },

      {
        label: "Executive Post Graduate Certificate Programmes",
        link: "/program/career-reboot",
        submenu: [
          {
            label: "Functional Specialization",
            link: "/program/functional-certifications",
            submenu: [
              { label: "Sales", link: "/program/sales" },
              {
                label: "Product Management",
                link: "/program/product-management",
              },
              { label: "Cybersecurity", link: "/program/cybersecurity" },
              {
                label: "Brand Management & Digital Marketing",
                link: "/program/bm-dm",
              },
              {
                label: "Mobility & Sustainability",
                link: "/program/mobility-sustainability",
              },
              { label: "Consulting", link: "/program/consulting" },
              { label: "Banking & Finance", link: "/program/banking-finance" },
              {
                label: "Business Analytics",
                link: "/program/business-analytics",
              },
              { label: "Data Science & AI", link: "/program/data-science" },
            ],
          },
          {
            label: "Industry Sector Specialization",
            link: "/program/industry-sector",
            submenu: [
              { label: "FinTech", link: "/program/fintech" },
              {
                label: "Global Capability Centers (GCC)",
                link: "/program/gcc",
              },
              {
                label: "Semi conductors",
                link: "/program/semi-conductors",
              },
              {
                label: "Health Care & Life Science. ",
                link: "/program/hc-ls",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Executive Education",
    placement: "bottom",
    link: "/program-customised-learning-programs-for-corporate-professionals",
    submenu: [
      {
        label: "Customised Learning Programs for Corporate Professionals",
        link: "/program/program-customised-learning-programs-for-corporate-professionals",
        submenu: [
          {
            label: "Management Development Programs (MDPs)",
            link: "/program/MDPs",
            className: "sublink-custom",
            customHover: false,
          },
        ],
      },
      {
        label: "1 Year CXO Accelerator Program with Campus Immersion",
        submenu: [
          { label: "CXO", link: "/program/CXO" },
          { label: "CIO", link: "/program/CIO" },
          { label: "CTO", link: "/program/CTO" },
          { label: "CMO", link: "/program/CMO" },
          { label: "CHRO", link: "/program/CHRO" },
          { label: "CFO", link: "/program/CFO" },
          { label: "CPO", link: "/program/CPO" },
        ],
      },
    ],
  },
  {
    label: "Faculty",
    placement: "bottom",
    submenu: [
      { label: "Sales & Marketing", link: "/faculty/sales-marketing" },
      { label: "Finance", link: "/faculty/finance" },
      {
        label: "Operations & Supply Chain",
        link: "/faculty/operations-supply-chain",
      },
      { label: "Analytics & AI", link: "/faculty/analytics-AI" },
      { label: "Consulting", link: "/faculty/consulting" },
      { label: "Product", link: "/faculty/product" },
      {
        label: "Business Communications & Others",
        link: "/faculty/business-communications-others",
      },
    ],
  },

  {
    label: "Advisory Councils",
    placement: "bottom",
    submenu: [
      {
        label: "Business Advisory Council",
        link: "/bac",
        submenu: [
          {
            label: "Academic Advisory Council",
            link: "/aac",
            className: "sublink-custom",
          },
          {
            label: "CHRO Advisory Council",
            link: "/chro",
            className: "sublink-custom",
          },
          {
            label: "Talent Advisory Council",
            link: "/tac",
            className: "sublink-custom",
          },
          {
            label: "L&D Advisory Council",
            link: "/ldac",
            className: "sublink-custom",
          },
          {
            label: "Young CXO Council",
            link: "/ycxoc",
            className: "sublink-custom",
          },
          {
            label: "Rising Leaders' Council",
            link: "/rlc",
            className: "sublink-custom",
          },
          {
            label: "Our Brand Ambassadors",
            link: "/oba",
            className: "sublink-custom",
          },
        ],
      },

      {
        label: "SME Program Advisory Council",
        submenu: [
          { label: "Sales Advisory Council", link: "/sac" },
          { label: "Product Management Advisory Council", link: "/pmac" },
          { label: "Cybersecurity Advisory Council", link: "/cac" },
          { label: "FinTech Advisory Council", link: "/ftac" },
          { label: "GCC Advisory Council", link: "/gccac" },
          {
            label: "Mobility & Sustainability Advisory Council",
            link: "/msac",
          },
          { label: "Consulting Advisory Council", link: "/conac" },
        ],
      },
    ],
  },

  {
    label: "Admissions",
    link: "/admissions",
    placement: "bottom",
  },

  {
    label: "Consortium",
    link: "/consortium",
    placement: "bottom",
  },

  {
    label: "Campus Placements",
    placement: "bottom",
    submenu: [
      { label: "Recruiting Partners", link: "/placements/recruiters" },
      { label: "Placement Reports", link: "/placements/reports" },
      { label: "Corporate Testimonials", link: "/placements/testimonials" },
      { label: "Summer Internships", link: "/placements/internships" },
      { label: "Live Projects", link: "/placements/projects" },
    ],
  },
  {
    label: "Partnership",
    placement: "top",
    submenu: [
      {
        label: "Industry Engagement",
        submenu: [
          { label: "CXO Series", link: "/engagement/cxo" },
          { label: "CIO ", link: "/engagement/cio" },
          { label: "CTO ", link: "/engagement/cto" },
          { label: "CMO ", link: "/engagement/cmo" },
          { label: "CHRO ", link: "/engagement/chro" },
          { label: "CFO ", link: "/engagement/cfo" },
          { label: "CPO ", link: "/engagement/cpo" },
          {
            label: "Career Accelerator Program (CAP)",
            link: "/engagement/cap",
          },
          {
            label: "Career Transformation to Career Acceleration (CT to CA)",
            link: "/engagement/ct-to-ca",
          },
        ],
      },
      {
        label: "Strategic Collaborations",
        submenu: [
          { label: "Strategic Partners", link: "/partners" },
          { label: "International Collaborations", link: "/collaborations" },
          { label: "Industry Partners", link: "/Industry-partners" },
          {
            label: "Centers of Excellence (CoEs)",
            submenu: [
              {
                label: "Marketing",
                link: "/coe/marketing",
              },
              {
                label: "Finance",
                link: "/coe/finance",
              },
              {
                label: "Operations",
                link: "/coe/operations",
              },
              {
                label: "Analytics, Data & AI",
                link: "/coe/analytics-ai",
              },
              {
                label: "Consulting",
                link: "/coe/consulting",
              },
              {
                label: "Entrepreneurship",
                link: "/coe/entrepreneurship",
              },
              {
                label: "Emerging Enterprise & Innovation (EEI)",
                link: "/coe/EmergingEnterpriseInnovation",
              },
              {
                label: "Faculty Chairs",
                link: "/coe/FacultyChairs",
              },
            ],
          },
        ],
      },
    ],
  },
  { label: "Campus", link: "/campus-ambience", placement: "top" },

  // { label: "Societal impact", link: "/csr", placement: "top" },
  // {
  //   label: "Budding Talent",
  //   placement: "top",
  //   submenu: [
  //     { label: "Open Programs", link: "/open-programs" },
  //     { label: "Summer Programs", link: "/summer-programs" },
  //   ],
  // },
  { label: "Careers", link: "/careers", placement: "top" },
  {
    label: "Media", placement: "top",
    submenu: [
      { label: "UCU Chennai in the Media", link: "/media/ucu-media" },
      { label: "What’s on at UCU Chennai", link: "/media/ucu-on-at" },
      { label: "Gallery", link: "/media/gallery" },
      { label: "UCU Chennai Blog", link: "/media/blog" },
    ]
  },
  // { label: "News & Blog", link: "/news-blogs", placement: "top" },
  // { label: "contact", link: "/contact", placement: "top" },
  {
    label: "Contact Us",
    link: "/contact-us",
    placement: "top",
  },

  // ✅ Industry Partnership (Merged)
  {
    label: "Online Programs",
    placement: "top",
    link: "/program/online-program",
    submenu: [
      { label: "Product Management", link: "/program/product-management" },
      { label: "Cybersecurity", link: "/program/cybersecurity" },
      { label: "Digital Marketing", link: "/program/digital-marketing" },
      {
        label: "Mobility & Sustainability",
        link: "/program/mobility-sustainability",
      },
      { label: "Consulting", link: "/program/consulting" },
      { label: "Banking & Finance", link: "/program/banking-finance" },
      { label: "Business Analytics", link: "/program/business-analytics" },
      { label: "Data Science", link: "/program/data-science" },
      {
        label: "Industry Sector Specific Offerings",
        link: "/program/industry-sector",
        submenu: [
          { label: "FinTech", link: "/program/fintech" },
          {
            label: "Global Capability Centers (GCC)",
            link: "/program/gcc",
          },
          {
            label: "Semi conductors",
            link: "/program/semi-conductors",
          },
          {
            label: "Health Care & Life Science. ",
            link: "/program/hc-ls",
          },
        ],
      },
    ],
  },

  // 🧭 Nav Bar (Main Menu - Bottom Placement)
];

// ✅ Custom order for mobile menu
