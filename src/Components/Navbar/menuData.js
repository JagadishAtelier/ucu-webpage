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
      { label: "Business Advisory Council (BAC)", link: "/bac" },
      { label: "Academic Advisory Council (AAC)", link: "/aac" },
      { label: "CHRO Advisory Council (CHRAC)", link: "/chrac" },
      { label: "Talent Advisory Council (TAC)", link: "/tac" },
      { label: "L&D Advisory Council (L&DAC)", link: "/ldac" },
      { label: "Young CXO Council (YCxC)", link: "/ycxc" },
      { label: "Rising Leaders' Council (RLC)", link: "/rlc" },
      { label: "Our Brand Ambassadors", link: "/brand-ambassadors" },
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
    submenu: [
      {
        label: "Full Time Programs",
        submenu: [
          { label: "PGPM-ELITE", link: "/pgpm-elite" },
          { label: "PGDM", link: "/pgdm" },
        ],
        link: "/full-time-programs",
      },
      {
        label: "Post Graduate Diplomas",
        submenu: [
          {
            label: "Functional (off-line)",
            submenu: [
              { label: "Sales", link: "/sales" },
              { label: "Product Management", link: "/product-management" },
              { label: "Cybersecurity", link: "/cybersecurity" },
              { label: "Digital Marketing", link: "/digital-marketing" },
              {
                label: "Mobility & Sustainability",
                link: "/mobility-sustainability",
              },
              { label: "Consulting", link: "/consulting" },
              { label: "Banking & Finance", link: "/banking-finance" },
              { label: "Business Analytics", link: "/business-analytics" },
              { label: "Data Science", link: "/data-science" },
            ],
          },
        ],
      },
      {
        label: "Industry-Sector Specific Offerings",
        submenu: [
          { label: "FinTech", link: "/fintech" },
          { label: "Global Capability Centers (GCC)", link: "/gcc" },
        ],
      },
      { label: "Career Reboot Program for Women", link: "/career-reboot" },
      {
        label: "Executive Education",
        submenu: [
          {
            label: "Customised Learning Programs for Corporate Professionals",
            link: "/customised-learning",
          },
          { label: "Management Development Programs (MDPs)", link: "/mdps" },
          {
            label: "1 Year CXO Accelerator Program with Campus Immersion",
            submenu: [
              { label: "CXO", link: "/cxo" },
              { label: "CIO", link: "/cio" },
              { label: "CTO", link: "/cto" },
              { label: "CMO", link: "/cmo" },
              { label: "CHRO", link: "/chro" },
              { label: "CFO", link: "/cfo" },
              { label: "CPO", link: "/cpo" },
            ],
          },
        ],
      },
      {
        label: "Online Programs (E-Learning)",
        submenu: [
          { label: "Sales", link: "/e-sales" },
          { label: "Product Management", link: "/e-product-management" },
          { label: "Cybersecurity", link: "/e-cybersecurity" },
          { label: "Digital Marketing", link: "/e-digital-marketing" },
          {
            label: "Mobility & Sustainability",
            link: "/e-mobility-sustainability",
          },
          { label: "Consulting", link: "/e-consulting" },
          { label: "Banking & Finance", link: "/e-banking-finance" },
          { label: "Business Analytics", link: "/e-business-analytics" },
          { label: "Data Science", link: "/e-data-science" },
        ],
      },
      {
        label: "Industry-Sector Specific Offerings",
        submenu: [
          { label: "FinTech", link: "/e-fintech" },
          { label: "Global Capability Centers (GCC)", link: "/e-gcc" },
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
    label: "Faculty",
    submenu: [
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
      { label: "Full Time", link: "/faculty/full-time" },
      { label: "Visiting Faculty", link: "/faculty/visiting" },
      { label: "Adjunct Faculty", link: "/faculty/adjunct" },
      { label: "Professors of Practice (PoP)", link: "/faculty/pop" },
      { label: "Associate & Assistant Faculty", link: "/faculty/associate" },
      { label: "Research", link: "/faculty/research" },
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
    label: "Consortium",
    submenu: [
      {
        label: "Strategic Collaborations & Partnerships",
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
          { label: "Strategic Partners", link: "/partners" },
          { label: "International Collaborations", link: "/collaborations" },
          { label: "Industry Partners", link: "/Industry-partners" },
        ],
      },
    ],
  },
  { label: "PACE", link: "/pace" },
  { label: "News & Blogs", link: "/news-blogs" },
  { label: "Annual Events", link: "/annual-events" },
  { label: "Admissions", link: "/admissions" },
  { label: "Contact Us", link: "/contact" },
  { label: "Campus Ambience", link: "/campus-ambience" },
  { label: "Corporate Social Responsibility (CSR)", link: "/csr" },
  { label: "Careers", link: "/careers" },
  { label: "Budding Talent Programs", link: "/budding-talent-programs" },
];
