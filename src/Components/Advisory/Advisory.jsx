import React from 'react'
import './Advisory.css'
import { useParams } from "react-router-dom";
import { FaLinkedin,FaChevronRight } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import pI from '../../Assets/acp/profileImg.webp'

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
const councils = [
    {
        type: "bac",
        gridHead: <>Meet Our <span className="color-highlight">Business Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Business Advisory Council",
        sec2head : "Business Advisory Council",
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
            { image : image3,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :image4,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : image5,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image6,
              name :"Mani James",
              prof : "Chief Business Officer,Mosiac Digital",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image7,
              name :"Preetha Reddy",
              prof : "Apollo",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image8,
              name :"Subramanian N. N.",
              prof : "CEO, Maveric",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image9,
              name :"Manish Goyal",
              prof : "Partner, A&M",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image10,
              name :"Dr. K. Ganesh",
              prof : "Partner, McKinsey & Company",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image11,
              name :"Chandramouliswaran (Mouli) V.",
              prof : "VP-Data, Paypal",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : image12,
              name :"Manikandan Thangarathnam",
              prof : "Sr. Director, Uber",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Sundar Rajan Rengamani",
              prof : "VP - Straive",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Sarathy Rajagopalan",
              prof : "Sr. Director, PayPal",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Kumaran Sasikanthan",
              prof : "Group VP, Informatica",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Ramanan S. V.",
              prof : "CEO, Intellect Design",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Bala MS",
              prof : "CEO, Stratinfinity",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "aac",
        gridHead: <>Meet Our <span className="color-highlight">Academic Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
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
              prof : "Director, XIMR"
            },
            { image :aacImg3,
              name :"Dr. P.K. Vishwanathan",
              prof : "Advisory, Academic Affairs",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : aacImg4,
              name :"Prof. Sanjoy Sircar",
              prof : " Professor of Finance | Program Director - PGPM | Expert in Corporate Finance & Financial Analytics ",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :aacImg5,
              name :"Dr. Vaidy Jayaraman ",
              prof : "Dean | Supply Chain & Analytics Expert | Ex-Great Lakes Principal ",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "hrac",
        gridHead: <>Meet Our <span className="color-highlight">HR Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
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
              prof : "Talent Management, Capegemini"
            },
            { image :pI,
              name :"Radhika Ravi",
              prof : "TA Head, Wipro",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : pI,
              name :"Subhasree Pradeep",
              prof : `HR & DEI Leader

              L&T`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Mithun Madhavan",
              prof : `TA, Optum`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Marcus Durai",
              prof : `HR Head - RAMCO`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Naresh Rajendran",
              prof : `HR Head - Grundfos`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Vandhana Sundaram",
              prof : `Sr. Director, LTI Mindtree`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Manoj Verghese",
              prof : `CPO, Tonik`,
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "ycc",
        gridHead: <>Meet Our <span className="color-highlight">Young CEOs</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Young CEOs Council",
        sec2head : "Young CEOs Council",
        sec2Para : "The Young CEOs Council plays a crucial role in the Corporate University's success by driving innovation with next-gen leadership. Comprising dynamic executives who have achieved CEO status at an early stage in their careers, the council provides invaluable guidance on fostering a culture of innovation, agility, and disruptive thinking. Their expertise ensures the University excels in future-proofing its curriculum, promoting entrepreneurial ventures, and equipping graduates with the skills and mindset to thrive in a rapidly evolving business landscape. By connecting the University with cutting-edge industry practices and emerging business models, the Young CEOs Council is instrumental in shaping a forward-thinking institution and ensuring its graduates are well-prepared to lead and transform organizations.",
        staff : [
            { image : yccImg1,
              name :"Vishal Lathwal",
              prof : "Apollo Homecare"
            },
            { image :yccImg2,
              name :"Ashish Prasad",
              prof : "A&M"
            },
            { image :yccImg3,
              name :"Aparna S.",
              prof : "Head - Bain & Co.",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :yccImg4,
              name :"Vidyasagari Sundaram",
              prof : "Partner, EY",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : pI,
              name :"Ramesh Babu",
              prof : "Head (AI & ML) - Innovations Inc.",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Savitha Ajitraj",
              prof : "Director, Paypal",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Kartik Kannan",
              prof : "DGroup Product Manager AJIO",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Prathitha Muthurangam",
              prof : "Business Head, Airtel",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Krithi Gugan",
              prof : "Director, Vivriti",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Uppili Ramabadran",
              prof : "Director, SYS",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Sreelakshmi Menon",
              prof : "GM, L&T",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Swetha Kochar",
              prof : "Partner, PKC Consulting",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Shankaran G.",
              prof : "Co-founder, Learner Circle",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Raghava Rao",
              prof : "CEO, Camocile",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Manoj Prabhakaar",
              prof : "MD & CEO, TrueInfo Labs",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },
            { image : pI,
              name :"Rachna Ganatra",
              prof : "Founder, RR",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "rlc",
        gridHead: <>Meet Our <span className="color-highlight">Rising Leaders'</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Rising Leaders' Council (RLC)",
        sec2head : "Rising Leaders' Council (RLC)",
        sec2Para : "The Rising Leaders Committee (RLC) plays a crucial role in the Corporate University's success by empowering growth with emerging talent. Comprising dynamic and accomplished young professionals, the RLC provides invaluable guidance on fostering student mentorship, offering real-world guidance, and championing innovative implementation ideas. Their expertise ensures the University excels in bridging the gap between academia and the professional world, equipping students with the necessary skills and insights to navigate their career paths, and infusing the University's initiatives with fresh perspectives. By connecting students with relatable role models and fostering a culture of continuous improvement, the RLC is instrumental in shaping a supportive and forward-thinking institution, and ensuring its graduates are well-prepared to excel as future leaders.",
        staff : [
            { image :image1,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image :image2,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image :image3,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :image4,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :image5,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "scc",
        gridHead: <>Meet Our <span className="color-highlight">Student Committees</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Student Committees & Clubs",
        sec2head : "Student Committees & Clubs",
        sec2Para : "At the forefront of the Universities strategic direction stands our esteemed Business Advisory Council (BAC). Comprised of luminaries holding influential leadership positions across diverse industries, the BAC provides invaluable insights and forward-thinking guidance. These accomplished executives contribute their unparalleled real-world experience, ensuring the Universities initiatives and member institutions remain acutely attuned to the dynamic demands of the global marketplace. The BAC serves as a powerful nexus between academia and industry, fostering a symbiotic relationship that shapes curriculum relevance, anticipates future talent needs, and ultimately empowers the next generation of business leaders. Their strategic counsel is instrumental in driving the Consortium's mission to elevate business education and foster sustainable growth.",
        staff : [
            { image :image1,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image :image2,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image :image3,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : image4,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : image5,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
            },

        ]
    },
    {
        type: "acc",
        gridHead: <>Meet Our <span className="color-highlight">Administrative Committee</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
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
            { image :image3,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image :image4,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : image5,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
              comLogo :`https://lh3.googleusercontent.com/sitesv/AICyYdZhVmfPaucDL4BYmRyKLf7C9q3kHYo5MwFQmomHwEwzCwzP4KkiDFRc-hie0ttV4w2_10OmLXQrVTtpIARYYNBR0nGZb6FFEWpwvnNgyvCIlbUdJIq_rvFUnAkqtg6rBeQraM8HfuDR-N_Pxjql9T8COs99Qw_hOEFFYXBzUy2anFsHFIHVW8P3xVhIfiAcunadvThlC0dJa1UJbMyX9plgAZ9PDm0O1K5b=w1280`
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
        backgroundImage: `url("https://worldatwork.org/media/CDN/dist/CDN2/images/article/Advisory_Council_1200x627-Revised.jpg")`,
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
        <div className="staff-card d-flex flex-column justify-content-between align-items-center text-center w-100">
          <img src={person.image} alt={person.name} className="staff-img" />

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
