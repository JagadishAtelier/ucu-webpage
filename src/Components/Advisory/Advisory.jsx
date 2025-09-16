import React from 'react'
import './Advisory.css'
import { useParams } from "react-router-dom";
import { FaLinkedin,FaChevronRight } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import pI from '../../Assets/acp/profileImg.webp'
import logoIno from '../../Assets/acp/logoIno.jpg'
import NewFooter from '../NewFooter/NewFooter';
import image1 from '../../Assets/acp/image1.jpg'
import image2 from '../../Assets/acp/image2.jpg'
import image3 from '../../Assets/acp/image3.jpg'
import image4 from '../../Assets/acp/image4.jpg'
import image5 from '../../Assets/acp/image5.jpg'
import image6 from '../../Assets/acp/image6.jpg'
import image7 from '../../Assets/acp/image7.jpg'
import image8 from '../../Assets/acp/image8.jpg'
import image9 from '../../Assets/acp/image9.jpg'
import image10 from '../../Assets/acp/image10.jpg'
import image11 from '../../Assets/acp/image11.jpg'
import image12 from '../../Assets/acp/image12.jpg'

//Aac Images
import aacImg1 from '../../Assets/aac/image1.jpg'
import aacImg2 from '../../Assets/aac/image2.jpg'
import aacImg3 from '../../Assets/aac/image3.jpg'
import aacImg4 from '../../Assets/aac/image4.jpg'
import aacImg5 from '../../Assets/aac/image5.jpg'

//HRac Image
import hracImg from '../../Assets/hac/image1.jpg'

//Ycc Images
import yccImg1 from '../../Assets/ycc/image1.jpg'
import yccImg2 from '../../Assets/ycc/image2.jpg'
import yccImg3 from '../../Assets/ycc/image3.jpg'
import yccImg4 from '../../Assets/ycc/image4.jpg'

// Rlc Images 
import rlcImg1 from '../../Assets/rlc/image1.jpg'
import rlcImg2 from '../../Assets/rlc/image2.jpg'
import rlcImg3 from '../../Assets/rlc/image3.jpg'
import rlcImg4 from '../../Assets/rlc/image4.jpg'
import rlcImg5 from '../../Assets/rlc/image5.jpg'
import rlcImg6 from '../../Assets/rlc/image7.jpg'
import rlcImg7 from '../../Assets/rlc/image8.jpg'
const councils = [
    {
        type: "bac",
        gridHead: <>Meet Our <span className="color-highlight">Business Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Business Advisory Council",
        sec2head : "Business Advisory Council",
        sec2Para : "At the forefront of the Universities strategic direction stands our esteemed Business Advisory Council (BAC). Comprised of luminaries holding influential leadership positions across diverse industries, the BAC provides invaluable insights and forward-thinking guidance. These accomplished executives contribute their unparalleled real-world experience, ensuring the Universities initiatives and member institutions remain acutely attuned to the dynamic demands of the global marketplace. The BAC serves as a powerful nexus between academia and industry, fostering a symbiotic relationship that shapes curriculum relevance, anticipates future talent needs, and ultimately empowers the next generation of business leaders. Their strategic counsel is instrumental in driving the Consortium's mission to elevate business education and foster sustainable growth.",
        staff : [
            { image : image3,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg`
            },
            { image :image4,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://upload.wikimedia.org/wikipedia/commons/1/1c/Accenture_logo.svg`
            },
            { image : image5,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
              comLogo :`https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png`
            },
            { image : image6,
              name :"Mani James",
              prof : "Chief Business Officer,Mosiac Digital",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprvG8j1wz9skvMeqqmT9J3Ih5Ie4jV69UZw&s`
            },
            { image : image7,
              name :"Preetha Reddy",
              prof : "Apollo",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCwVoIefNX_v1icK6HUoNCTo_5bVgTT2-Atuiqp57HKLF-yqE_jILY3idbTCIRdCOGA_I&usqp=CAU`
            },
            { image : image8,
              name :"Subramanian N. N.",
              prof : "CEO, Maveric",
              comLogo :`https://cdn-fcich.nitrocdn.com/ZguJicRwSUMwxXTngUutFlvSuzRwiSdB/assets/images/optimized/rev-f55dbdb/maveric-systems.com/wp-content/uploads/2023/12/Maveric-AN-Logo_Original.png`
            },
            { image : image9,
              name :"Manish Goyal",
              prof : "Partner, A&M",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Njo9Zw47uUtbXxwjZeCsxfbfDzJzd9tdUA&s`
            },
            { image : image10,
              name :"Dr. K. Ganesh",
              prof : "Partner, McKinsey & Company",
              comLogo :`https://cdn.cookielaw.org/logos/353d36fb-3a1c-4021-b831-ee6d50361d6a/07a8989e-cba1-4f60-a67a-0ffe9efc1b3a/5705935c-c99f-48d8-8aef-b78127f4aed3/mckinsey---company_owler_20190728_090718_original.png`
            },
            { image : image11,
              name :"Chandramouliswaran (Mouli) V.",
              prof : "VP-Data, Paypal",
              comLogo :`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png`
            },
            { image : image12,
              name :"Manikandan Thangarathnam",
              prof : "Sr. Director, Uber",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjgpgVspA7OECttknM08dXUEZNc40OBwOFw&s`
            },
            { image : pI,
              name :"Sundar Rajan Rengamani",
              prof : "VP - Straive",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzHQ_8annzluojESqlaeDNAKt4_ZQSyXI4PA&s`
            },
            { image : pI,
              name :"Sarathy Rajagopalan",
              prof : "Sr. Director, PayPal",
              comLogo :`https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png`
            },
            { image : pI,
              name :"Kumaran Sasikanthan",
              prof : "Group VP, Informatica",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn2q06EAtGZ7ldD03vRTq9JGY2QIwDh5kEHw&s`
            },
            { image : pI,
              name :"Ramanan S. V.",
              prof : "CEO, Intellect Design",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirsrTU93EYKDlGl_QpuQHZVZT068NPoBV5Q&s`
            },
            { image : pI,
              name :"Bala MS",
              prof : "CEO, Stratinfinity",
              comLogo :`https://media.licdn.com/dms/image/v2/D563DAQHfueHRFrC1uw/image-scale_191_1128/image-scale_191_1128/0/1697805029697/stratinfinity_inc_cover?e=2147483647&v=beta&t=OGPxLoaDiKyyBUmZPexuMk_dFz4dvveeYfIIKimYMWk`
            },

        ]
    },
    {
        type: "aac",
        gridHead: <>Meet Our <span className="color-highlight">Academic Advisors</span></>,
        bgImage : `https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/about/administration/offices/hr/recruitment-diversity/people/u-a-c-d/DSPIIE-Phase-III-006.jpg`,
        bannerHead : "Academic Advisory Council",
        sec2head : "Academic Advisory Council",
        sec2Para : "The lifeblood of the Corporate Universities intellectual rigor is our esteemed Academic Advisory Committee. Comprising distinguished scholars, pioneering researchers, and globally recognized thought leaders in management education, this committee is dedicated to upholding and advancing the highest standards of academic excellence. They provide crucial guidance on curriculum development, pedagogical innovation, and research initiatives, ensuring that member B-Schools remain at the vanguard of management knowledge. The AAC fosters a culture of continuous improvement, promoting cutting-edge teaching methodologies, and anticipating future trends in business education.",
        staff : [
            { image : aacImg1,
              name :"Venkat GRV",
              prof : `Academic Affairs, Ex-IFMR KREA (PD)

              AAC Chair`
            },
            { image :aacImg2,
              name :"Dr. Vaidyanathan",
              prof : "Director, XIMR",
              comLogo :"https://www.ximr.ac.in/Content/images/logo.png"
            },
            { image :aacImg3,
              name :"Dr. P.K. Vishwanathan",
              prof : "Advisory, Academic Affairs",
            },
            { image : aacImg4,
              name :"Prof. Sanjoy Sircar",
              prof : " Professor of Finance | Program Director - PGPM | Expert in Corporate Finance & Financial Analytics ",
              comLogo : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQioLMk0I8GQtxjr120g9yxRq4cBRqTUeYqXQ&s`
            },
            { image :aacImg5,
              name :"Dr. Vaidy Jayaraman ",
              prof : "Dean | Supply Chain & Analytics Expert | Ex-Great Lakes Principal ",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWtJ-Xp_Xh77xKqcdXrS_b-4N5sX44xEHymg&s`
            },

        ]
    },
    {
        type: "hrac",
        gridHead: <>Meet Our <span className="color-highlight">HR Advisors</span></>,
        bgImage : `https://www.rklcpa.com/wp-content/uploads/2022/09/Team-Meeting.jpg`,
        bannerHead : "HR Advisory Council",
        sec2head : "HR Advisory Council",
        sec2Para : "The HR Advisory Council plays a crucial role in the Corporate University's success by shaping talent excellence with strategic insight. Comprising seasoned HR leaders, organizational development experts, and talent management specialists, the council provides invaluable guidance on attracting, developing, and retaining top-tier talent for both employees and students. Their expertise ensures the University excels in strategic workforce planning, talent acquisition and onboarding, performance management and professional development, compensation and benefits, succession planning, organizational culture and employee engagement, student admission advisory, and aligning programs with corporate placement demands. By championing a people-centric approach and fostering an environment that empowers employees, promotes growth, and aligns individual aspirations with the Corporate University's overarching goals, the HR Advisory Council is instrumental in shaping a dynamic and inclusive workplace and ensuring graduates are well-prepared to meet the evolving needs of the corporate world, thereby ensuring the University's continued success.",
        staff : [
            { image :hracImg,
              name :"Krithivasan S.",
              prof : "HRAC Chair"
            },
            { image : pI,
              name :"Deepshikha Bhowmick",
              prof : "Talent Management, Capegemini",
              comLogo : "https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
            },
            { image :pI,
              name :"Radhika Ravi",
              prof : "TA Head, Wipro",
              comLogo : `https://www.bigdatawire.com/wp-content/uploads/2022/11/wipro-logo-2022.png`
            },
            { image : pI,
              name :"Subhasree Pradeep",
              prof : `HR & DEI Leader

              L&T`,
              comLogo :`https://www.wirecable.in/wp-content/uploads/2024/05/larsen-toubro.png`
            },
            { image : pI,
              name :"Mithun Madhavan",
              prof : `TA, Optum`,
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOSU02Lv5k_xuDRty7jdO8IGbrv3rQH748A&s`
            },
            { image : pI,
              name :"Marcus Durai",
              prof : `HR Head - RAMCO`,
              comLogo :`https://gpa.net/cdn/shop/articles/Ramco_Systems_logo_1024x.png?v=1679913362`
            },
            { image : pI,
              name :"Naresh Rajendran",
              prof : `HR Head - Grundfos`,
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp1w10uQTD0vwsVJUKsoo8MFYQLfkz3IISQ&s`
            },
            { image : pI,
              name :"Vandhana Sundaram",
              prof : `Sr. Director, LTI Mindtree`,
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz672QMsGdwWLm8I2wH5mquKQseumpD24taA&s`

            },
            { image : pI,
              name :"Manoj Verghese",
              prof : `CPO, Tonik`,
              comLogo :`https://lh3.googleusercontent.com/PlrQKH49IfuWJQ-aqiDmNRFHmORjkrlj5QIkWGz5B7-TlZ5w3LgkOIObUsX665hDoEzEVcf_-LWwqmpA6GutsGG5dKCYlqvffFEAQf_fNmlM4WWh6RBj`
            },

        ]
    },
    {
        type: "ycc",
        gridHead: <>Meet Our <span className="color-highlight">Young CEOs</span></>,
        bgImage : `https://www.vitalvoices.org/wp-content/uploads/2020/06/Young-Leaders-Council-Header.png`,
        bannerHead : "Young CEOs Council",
        sec2head : "Young CEOs Council",
        sec2Para : "The Young CEOs Council plays a crucial role in the Corporate University's success by driving innovation with next-gen leadership. Comprising dynamic executives who have achieved CEO status at an early stage in their careers, the council provides invaluable guidance on fostering a culture of innovation, agility, and disruptive thinking. Their expertise ensures the University excels in future-proofing its curriculum, promoting entrepreneurial ventures, and equipping graduates with the skills and mindset to thrive in a rapidly evolving business landscape. By connecting the University with cutting-edge industry practices and emerging business models, the Young CEOs Council is instrumental in shaping a forward-thinking institution and ensuring its graduates are well-prepared to lead and transform organizations.",
        staff : [
            { image : yccImg1,
              name :"Vishal Lathwal",
              prof : "Apollo Homecare",
              comLogo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzfRRIqFoGxJZjUeJhe95-yObY0tSAU0oEw&s"
            },
            { image :yccImg2,
              name :"Ashish Prasad",
              prof : "A&M",
              comLogo:"https://www.bvca.co.uk/static/de9585cd-10c6-4d0d-ace88e44607b74fd/Alvarez-Marsal-Europe-LLP.jpg"
            },
            { image :yccImg3,
              name :"Aparna S.",
              prof : "Head - Bain & Co.",
              comLogo : `https://www.consultancy.in/profile/media/bain-company-spotlight-2021-09-30-140558201.png`
            },
            { image :yccImg4,
              name :"Vidyasagari Sundaram",
              prof : "Partner, EY",
              comLogo : `https://knect365.imgix.net/uploads/EY-Logo-Beam-Tag-Horizontal-RGB-OffBlack-Yellow-border2-f205367abc70f83910164a166e45c51f.png?auto=format&fit=max&w=412&dpr=5`
            },
            { image : pI,
              name :"Ramesh Babu",
              prof : "Head (AI & ML) - Innovations Inc.",
              comLogo :logoIno
            },
            { image : pI,
              name :"Savitha Ajitraj",
              prof : "Director, Paypal",
              comLogo :`https://marketplace.commercetools.com/img/containers/assets/pp_h_rgb_450-450.png/b0735facc519b33d6ceb1a7133fa77ad.png`
            },
            { image : pI,
              name :"Kartik Kannan",
              prof : "DGroup Product Manager AJIO",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukFWxO8FAucrV4RAiwXBt3TiDjUQNU5SIXw&s`
            },
            { image : pI,
              name :"Prathitha Muthurangam",
              prof : "Business Head, Airtel",
              comLogo :`https://www.gadgets360.com/static/v1/images/og_airtel.png`
            },
            { image : pI,
              name :"Krithi Gugan",
              prof : "Director, Vivriti",
              comLogo :`https://www.tvscapital.in/wp-content/uploads/2023/07/vivriti-65800cd2e6718.webp`
            },
            { image : pI,
              name :"Uppili Ramabadran",
              prof : "Director, SYS",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_qw3BgGR1m8rNOC_kHrWcWqkZzMlJf9nwIH6PdT3_IZqTBoJNecOH7ox88C4amjXtZA&usqp=CAU`
            },
            { image : pI,
              name :"Sreelakshmi Menon",
              prof : "GM, L&T",
              comLogo :`https://img.etimg.com/thumb/width-1200,height-900,imgsize-18236,resizemode-75,msid-119848724/industry/indl-goods/svs/engineering/larsen-toubro-wins-large-orders-in-india-overseas.jpg`
            },
            { image : pI,
              name :"Swetha Kochar",
              prof : "Partner, PKC Consulting",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyHCAFZfDfjqlhznsreMDnVM37xB6BY-dhg&s`
            },
            { image : pI,
              name :"Shankaran G.",
              prof : "Co-founder, Learner Circle",
              comLogo :`https://play-lh.googleusercontent.com/qfmpNiFCKopf-RwmDDm1T8ZpDx3O5yLVpI2Sjuhj90MVmIAUwVN7ZjU4hoYByEOq9BE`
            },
            { image : pI,
              name :"Raghava Rao",
              prof : "CEO, Camocile",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52jDO5PWGPrVm7Tz1tu2QR3X7PJLX_SGaUw&s`
            },
            { image : pI,
              name :"Manoj Prabhakaar",
              prof : "MD & CEO, TrueInfo Labs",
              comLogo :`https://media.licdn.com/dms/image/v2/C560BAQG5K17Zs-cxaQ/company-logo_200_200/company-logo_200_200/0/1679503453577?e=2147483647&v=beta&t=ke_DtFvulOc7FNf-JQNC5pWmIedKDeiebXFwEsCIwzg`
            },
            { image : pI,
              name :"Rachna Ganatra",
              prof : "Founder, RR",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcgZ1D8KRH7rxuGdTAtGMtGGWJnlwveZpx8A&s`
            },

        ]
    },
    {
        type: "rlc",
        gridHead: <>Meet Our <span className="color-highlight">Rising Leaders'</span></>,
        bgImage : `https://wict-bucket.s3.amazonaws.com/wp-content/uploads/2023/01/2022_nov_RLP_class_photo-scaled.jpg`,
        bannerHead : "Rising Leaders' Council (RLC)",
        sec2head : "Rising Leaders' Council (RLC)",
        sec2Para : "The Rising Leaders Committee (RLC) plays a crucial role in the Corporate University's success by empowering growth with emerging talent. Comprising dynamic and accomplished young professionals, the RLC provides invaluable guidance on fostering student mentorship, offering real-world guidance, and championing innovative implementation ideas. Their expertise ensures the University excels in bridging the gap between academia and the professional world, equipping students with the necessary skills and insights to navigate their career paths, and infusing the University's initiatives with fresh perspectives. By connecting students with relatable role models and fostering a culture of continuous improvement, the RLC is instrumental in shaping a supportive and forward-thinking institution, and ensuring its graduates are well-prepared to excel as future leaders.",
        staff : [
            { image :rlcImg1,
              name :"Bharath Rapeka",
              // prof : "Founder, CU"
              comLogo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrkada84btevykP_-yrqs0YXM_YclNrdZMg&s"
            },
            { image :rlcImg2,
              name :"Manikandan M.",
              // prof : "Student Mentorship & Welfare"
              comLogo : "https://marketplace.commercetools.com/img/containers/assets/pp_h_rgb_450-450.png/b0735facc519b33d6ceb1a7133fa77ad.png"
            },
            { image :rlcImg3,
              name :"Ajit Bhardwaj",
              // prof : "MD, Accenture Strategy",
              comLogo : `https://marketplace.commercetools.com/img/containers/assets/pp_h_rgb_450-450.png/b0735facc519b33d6ceb1a7133fa77ad.png`
            },
            { image :rlcImg4,
              name :"Deep Gandhi",
              // prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlsj9bCdo4Ct_4GmzwijJPFfcplaj3NraAcg&s`
            },
            { image :rlcImg5,
              name :"Anna Vinaya Xavier",
              // prof : "Ex-Google",
              comLogo :`https://www.clientassociates.com/images/logo.png`
            },
            { image :rlcImg6,
              name :"Jaideep Thanage",
              prof : "Ex-Google",
              comLogo :`https://boomi.com/wp-content/uploads/Dell_Technologies_logo-2-1.png`
            },
            { image :rlcImg7,
              name :"Ritwick Banerjea",
              prof : "ex-McKinsey",
              comLogo :`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6d_C2nCLaVGFVTXgvBWLC_OPk4GQ31yvvQ&s`
            },

        ]
    },
    {
        type: "scc",
        // gridHead: <>Meet Our <span className="color-highlight">Student Committees</span></>,
        bgImage : `https://iimbg.ac.in/wp-content/uploads/2024/02/Adcom25-scaled.jpg`,
        bannerHead : "Student Committees & Clubs",
        sec2head : "Student Committees & Clubs",
        sec2Para : "At the forefront of the Universities strategic direction stands our esteemed Business Advisory Council (BAC). Comprised of luminaries holding influential leadership positions across diverse industries, the BAC provides invaluable insights and forward-thinking guidance. These accomplished executives contribute their unparalleled real-world experience, ensuring the Universities initiatives and member institutions remain acutely attuned to the dynamic demands of the global marketplace. The BAC serves as a powerful nexus between academia and industry, fostering a symbiotic relationship that shapes curriculum relevance, anticipates future talent needs, and ultimately empowers the next generation of business leaders. Their strategic counsel is instrumental in driving the Consortium's mission to elevate business education and foster sustainable growth.",
        staff : [
            // { image :image1,
            //   name :"Dr. M. Balaji (BALA)",
            //   prof : "Founder, CU"
            // },
            // { image :image2,
            //   name :"Ritwick Banerjea",
            //   prof : "Student Mentorship & Welfare"
            // },
            // { image :image3,
            //   name :"Ganesan Ramachandran",
            //   prof : "MD, Accenture Strategy",
            //   comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            // },
            // { image : image4,
            //   name :"Sundara B. Reddy",
            //   prof : "MD, Accenture Strategy,BAC Chair",
            //   comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            // },
            // { image : image5,
            //   name :"Murali Chandranasan",
            //   prof : "Sr. Director, Capgemini Invent",
            //   comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            // },

        ]
    },
    {
        type: "acc",
        gridHead: <>Meet Our <span className="color-highlight">Administrative Committee</span></>,
        bgImage : `https://liac-bba.org/wp-content/uploads/2024/06/about-p.jpg`,
        bannerHead : "Administrative Committee",
        sec2head : "Administrative Committee",
        sec2Para : "At the forefront of the Universities strategic direction stands our esteemed Business Advisory Council (BAC). Comprised of luminaries holding influential leadership positions across diverse industries, the BAC provides invaluable insights and forward-thinking guidance. These accomplished executives contribute their unparalleled real-world experience, ensuring the Universities initiatives and member institutions remain acutely attuned to the dynamic demands of the global marketplace. The BAC serves as a powerful nexus between academia and industry, fostering a symbiotic relationship that shapes curriculum relevance, anticipates future talent needs, and ultimately empowers the next generation of business leaders. Their strategic counsel is instrumental in driving the Consortium's mission to elevate business education and foster sustainable growth.",
        staff : [
            { image : image1,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : image2,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },

        ]
    },
]
function Advisory() {
    const { type } = useParams();
    const council = councils.find((c) => c.type === type);
    if (!council) {
        return <h2 className="text-center mt-5">Council not found</h2>;
      }
  return (
    <div>
        <Navbar/>
    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-column align-items-center justify-content-center justify-content-lg-center text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url(${council.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
      }}
    >
        <h1>{council.bannerHead}</h1>

        <div className="d-flex align-items-center flex-row gap-2 justify-content-center justify-content-lg-start mt-3">
              <p className="fs-5 mb-0 bread-crumb">Home</p>
                <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
                <p className="fs-5 mb-0 bread-crumb">Advisory Council</p>
                <FaChevronRight size={window.innerWidth > 991 ? 12 : 15} />
                <p className="fs-5 mb-0 bread-crumb">{council.bannerHead}</p>
        </div>
    </div>
    <section className="my-5 px-3 px-lg-5">
        <h4 className='text-center mb-3 lg:mb-4'>{council.sec2head}</h4>
        <p className='text-center text-lg-start'>{council.sec2Para}</p>
      </section>

      <section 
  className="container position-relative justify-content-center align-items-center"
  style={{
    backgroundImage: `url('/logo1.png')`,
    backgroundSize: "auto",        // adjust size to fit nicely
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "60vh",
  }}
>
  {/* Overlay to make it slightly visible */}
  <div 
    className="position-absolute top-0 start-0 w-100 h-100" 
    style={{
      backgroundColor: "rgba(255,255,255,0.9)", // light overlay
      pointerEvents: "none", // keep it non-interactive
    }}
  />

  <div className="position-relative">
    <h1 className="display-4 fw-bold col-12 text-center my-5">
      {council.gridHead}
    </h1>
  </div>

  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-lg-5 mb-5 position-relative">
    {council.staff.map((person, idx) => (
      <div key={idx} className="col d-flex">
        <div className="staff-card d-flex flex-column justify-content-between align-items-center text-center w-100 mt-lg-3">
          <img src={person.image} alt={person.name} className="staff-img" />
          <div className='com-logo'>
          {person.comLogo && (
            <img src={person.comLogo} className='com-logo-img'/>
          )}
          </div>
          <div className="mt-3">
            <h4 className="fs-4 fw-bold text-uppercase mb-2">{person.name}</h4>
            <p className="fs-5 color-highlight mb-2 font-bold">{person.prof}</p>
          </div>

          <div className="d-flex flex-column align-items-center gap-2">
            <FaLinkedin size={30} className="linkedin-icon" />
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


<NewFooter/>

      </div>
  )
}

export default Advisory
