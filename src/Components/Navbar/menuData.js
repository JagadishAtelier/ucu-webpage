export const menuData = [
  { label: "Home", link: "/" },
  {
    label: "About",
    submenu: [
      { label: "About UCU", link: "/about-ucu" },
      { label: "Vision & Mission", link: "/vision-mission" },
      { label: "Founder's Message", link: "/founder-message" },
      { label: "Industry First Approach", link: "/industry-approach" },
      { label: "Campus", link: "/campus" },
    ],
  },
  {
    label: "Advisory Councils",
    submenu: [
      { label: "Business Advisory Council", link: "/bac" },
      { label: "Academic Advisory Council", link: "/aac" },
      { label: "CHRO Advisory Council (CHRAC)", link: "/chro" },
      { label: "Talent Advisory Council (TAC)", link: "/tac" },
      { label: "L&D Advisory Council (L&DAC)", link: "/ldac" },
      { label: "Young CXO Council (YCxC)", link: "/ycxoc" },
      { label: "Rising Leader's Council", link: "/rlc" },
      { label: "Our Brand Ambassadors", link: "/oba" },
      {
        label: "SME Program Advisory Council",
        submenu: [
          { label: "Sales Advisory Council (SAC)", link: "/sac" },
          {
            label: "Product Management Advisory Council (PMAC)",
            link: "/pmac",
          },
          { label: "Cybersecurity Advisory Council (CAC)", link: "/cac" },
          { label: "FinTech Advisory Council (FTAC)", link: "/ftac" },
          { label: "GCC Advisory Council (GCCAC)", link: "/gccac" },
          {
            label: "Mobility & Sustainability Advisory Council (MSAC)",
            link: "/msac",
          },
          { label: "Consulting Advisory Council (ConAC)", link: "/conac" },
        ],
      },
    ],
  },
  {
    label: "Programs",
    link: "/program",
    submenu: [
      {
        label: "Full Time Programs",
        link: "/program/full-time-programs",
        submenu: [
          { label: "PGPM-ELITE", link: "/program/pgpm-elite" },
          { label: "PGDM", link: "/program/pgdm" },
          {
            label: "Career Reboot Program for Women",
            link: "/program/career-reboot",
          },
          {
            label: "Faculty Development Program",
            link: "/program/faculty-development",
          },
        ],
      },
      {
        label: "Post Graduate Diplomas",
        link: "/program/post-graduate-diplomas",
        submenu: [
          {
            label: "Functional (off-line)",
            link: "/program/functional-offline",
            submenu: [
              { label: "Sales", link: "/program/sales" },
              {
                label: "Product Management",
                link: "/program/product-management",
              },
              { label: "Cybersecurity", link: "/program/cybersecurity" },
              {
                label: "Digital Marketing",
                link: "/program/digital-marketing",
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
              { label: "Data Science", link: "/program/data-science" },
            ],
          },
          {
            label: "Industry-Sector Specific Offerings",
            link: "/program/industry-sector",
            submenu: [
              { label: "FinTech", link: "/program/fintech" },
              {
                label: "Global Capability Centers (GCC)",
                link: "/program/gcc",
              },
            ],
          },
        ],
      },
      // {
      //   label: "Functional (off-line)",
      //   link: "/program/functional-off-line",
      //       submenu: [
      //         { label: "Sales", link: "/program/sales" },
      //         {
      //           label: "Product Management",
      //           link: "/program/product-management",
      //         },
      //         { label: "Cybersecurity", link: "/program/cybersecurity" },
      //         {
      //           label: "Digital Marketing",
      //           link: "/program/digital-marketing",
      //         },
      //         {
      //           label: "Mobility & Sustainability",
      //           link: "/program/mobility-sustainability",
      //         },
      //         { label: "Consulting", link: "/program/consulting" },
      //         { label: "Banking & Finance", link: "/program/banking-finance" },
      //         {
      //           label: "Business Analytics",
      //           link: "/program/business-analytics",
      //         },
      //         { label: "Data Science", link: "/program/data-science" },
      //       ],
      // },
      // {
      //   label: "Industry-Sector Specific Offerings",
      //   link: "/program/industry-sector",
      //   submenu: [
      //     { label: "FinTech", link: "/program/fin-tech" },
      //     {
      //       label: "Global Capability Centers (GCC)",
      //       link: "/program/gcc",
      //     },
      //   ],
      // },
      {
        label: "Executive Education",
        link: "/program/executive-education",
        submenu: [
          {
            label: "Customised Learning Programs for Corporate Professionals",
            link: "/program/customised-learning",
          },
          {
            label: "Management Development Programs (MDPs)",
            link: "/program/mdps",
          },
          {
            label: "1 Year CXO Accelerator Program with Campus Immersion",
            link: "/program/cxo-accelerator",
            submenu: [
              { label: "CXO", link: "/program/cxo" },
              { label: "CIO", link: "/program/cio" },
              { label: "CTO", link: "/program/cto" },
              { label: "CMO", link: "/program/cmo" },
              { label: "CHRO", link: "/program/chro" },
              { label: "CFO", link: "/program/cfo" },
              { label: "CPO", link: "/program/cpo" },
            ],
          },
        ],
      },
      {
        label: "Online Programs (E-Learning)",
        link: "/program/online-program",
            submenu: [
              { label: "Sales", link: "/program/sales" },
              {
                label: "Product Management",
                link: "/program/product-management",
              },
              { label: "Cybersecurity", link: "/program/cybersecurity" },
              {
                label: "Digital Marketing",
                link: "/program/digital-marketing",
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
              { label: "Data Science", link: "/program/data-science" },
            ],
      },
    ],
  },
  {
    label: "Faculty",
    submenu: [
      { label: "Full Time", link: "/faculty/full-time" },
      { label: "Visiting Faculty", link: "/faculty/visiting" },
      { label: "Adjunct Faculty", link: "/faculty/adjunct" },
      { label: "Professors of Practice (PoP)", link: "/faculty/pop" },
      { label: "Associate & Assistant Faculty", link: "/faculty/associate" },
      { label: "Research", link: "/faculty/research" },
      {
        label: "Area Chairs",
        submenu: [
          { label: "Marketing", link: "/faculty/marketing" },
          { label: "Finance", link: "/faculty/finance" },
          { label: "Operations & Supply Chain", link: "/faculty/operations" },
          { label: "Analytics & AI", link: "/faculty/analytics-ai" },
          { label: "Consulting", link: "/faculty/consulting" },
          { label: "Product", link: "/faculty/product" },
        ],
      },
    ],
  },
  {
    label: "Campus Placements",
    submenu: [
      { label: "Recruiting Partners", link: "/placements/recruiters" },
      { label: "Placement Reports", link: "/placements/reports" },
      { label: "Corporate Testimonials", link: "/placements/testimonials" },
      { label: "Summer Internships", link: "/placements/internships" },
      { label: "Live Projects", link: "/placements/projects" },
    ],
  },
  {
    label: "Industry-Academia Engagement",
    submenu: [
      { label: "CXO Series", link: "/engagement/cxo" },
      { label: "CIO Series", link: "/engagement/cio" },
      { label: "CTO Series", link: "/engagement/cto" },
      { label: "CMO Series", link: "/engagement/cmo" },
      { label: "CHRO Series", link: "/engagement/chro" },
      { label: "CFO Series", link: "/engagement/cfo" },
      { label: "CPO Series", link: "/engagement/cpo" },
      { label: "Career Accelerator Program (CAP)", link: "/engagement/cap" },
      {
        label: "Career Transformation to Career Acceleration (CT to CA)",
        link: "/engagement/ct-to-ca",
      },
    ],
  },
  {
    label: "Strategic",
    submenu: [
      {
        label: "Centers of Excellence (CoEs)",
        submenu: [
          {
            label: "Center of Excellence in Marketing",
            link: "/coe/marketing",
          },
          {
            label: "Center of Excellence in Finance",
            link: "/coe/finance",
          },
          {
            label: "Center of Excellence in Operations",
            link: "/coe/operations",
          },
          {
            label: "Center of Excellence in Analytics, Data & AI",
            link: "/coe/analytics-ai",
          },
          {
            label: "Center of Excellence in Consulting",
            link: "/coe/consulting",
          },
          {
            label: "Center of Excellence in Entrepreneurship",
            link: "/coe/entrepreneurship",
          },
        ],
      },
      // {
      //   label: "Centers of Excellence (CoEs)",
      //   submenu: [
      //     {
      //       label: "Center of Excellence in Marketing",
      //       link: "/coe/marketing",
      //     },
      //     {
      //       label: "Center of Excellence in Finance",
      //       link: "/coe/finance",
      //     },
      //     {
      //       label: "Center of Excellence in Operations",
      //       link: "/coe/operations",
      //     },
      //   ],
      // },
      { label: "Strategic Partners", link: "/partners" },
      { label: "International Collaborations", link: "/collaborations" },
      { label: "Industry Partners", link: "/Industry-partners" },

    ],
  },
  { label: "PACE", link: "/pace" },
  { label: "Admissions", link: "/admissions" },
  { label: "Contact Us", link: "/contact" },
  { label: "Campus Ambience", link: "/campus-ambience" },
  { label: "CSR", link: "/csr" },
  { label: "Careers", link: "/careers" },
  { label: "Consortium", link: "/consortium" },
];
