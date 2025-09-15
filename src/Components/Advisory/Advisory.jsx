import React from 'react'
import './Advisory.css'
import { useParams } from "react-router-dom";
import { FaLinkedin,FaChevronRight } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import NewFooter from '../NewFooter/NewFooter';
import image1 from '../../Assets/acp/image1.jpg'
import image2 from '../../Assets/acp/image2.jpg'
import image3 from '../../Assets/acp/image3.jpg'
import image4 from '../../Assets/acp/image4.jpg'
import image5 from '../../Assets/acp/image5.jpg'
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
              name :"Murali Chandranasan",
              prof : "Sr. Director, Capgemini Invent",
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
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
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdanPYoqVhK5ZWHjkEsa6t0P-z3BEIQesXTk9MhrYFQvvnF8O2zuDvxwackhLKgUoJs3BcOdcgUs4x7NINeIaRF7g97DqfmiBocwyF6Q8UhJ7jPSLy9pLnLqA_zD-GyMiLcckrzdo0L4DxBDS1etmQbFzRIWw8hKPNICPS148ZZWosBgwl0854TpPyMhVmv4DakqwXxC7rRCV8f4h_9ZWjrEJ586990o-4iWiHE=w1280`,
              name :"Dr. M. Balaji (BALA)",
              prof : "Founder, CU"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdZ6dEJNMaz40rey41Qdi6QxHki7ktlR2Cvh-qdF08j5zP5W83Fuodce6gDLnyiJvrU4KeZ9ok6k3R4ONhI6zTXxwvr0QNPLT35RzkvHAxXpU5gWHJBTgqUyJnphwJ3X8TnRKjhnt7NwnglAdj8ibKRxF0RTBEjyBVqkp6r3gzeA9ibCCQiAeULiAdY-JxB_KWXRbRZgugiJ7ewjr6yyrqdnWf2HKCjUsP3kKHs=w1280`,
              name :"Ritwick Banerjea",
              prof : "Student Mentorship & Welfare"
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdYUj-6Ey0D1CJNzgUG5OMEyn1yxFblnQ1axJz_BS7mB336adAZTpDZUH89m8HCfvoPYAl11IwKcZZBkP9B5Y3aa_SVL_QCbduX4xHuT-TYIEDCtGlxlroAnt84kaFAIVTiKQRY50K59s4degT-8XEbxNapcPOvpiu2Lf-P1D0V9LiGOxxav-TxGk4kTj4d5tmH5s_W98KZBiJsNLAshN9QB-Oa3aY1FNCX8=w1280`,
              name :"Ganesan Ramachandran",
              prof : "MD, Accenture Strategy",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdbkkkU4bYHVPdvG2VKqQatlvKA9hjb3zCkJxrX4HyYlX0CrBcxtUR_OsikpnKb-V4Pzjnpjxt8IjneYwVHWKqKFGJfHKtZZShGASg23hWhy0eNQu46lnBPQOYH33f5sakU3mf9bXAuzK1EGOQjjTQ0JZs9Oq1lguoWnpsszygnJp4SZ8YgZcb9G-cVaNqKvRRFUvXevNLU3RJq0mc3Q5x3V31kNuhg-CAmg=w1280`,
              name :"Sundara B. Reddy",
              prof : "MD, Accenture Strategy,BAC Chair",
              comLogo : `https://lh3.googleusercontent.com/sitesv/AICyYdbIw1-GvNUHzyM_1VgxrLNUFV4U6JV3mtlACDVmnmcOSgprTbL1VtY4naFoD0Vrg7HAtari79K9o7QBSjJWBJ38gGboeqMF2oUYIqtKgAio5ruPekYm_pUiMqYWPqUJFbAJ1CeBbklpy05t5k3taOvt1Eo4ecR7s7Ud4I-s7SSNjEtIv2IxIz-2eI1Pyy5JY8aEXKVhTCdF3oE9aH9wLgNoJuv5jtLnKC-gYj8=w1280`
            },
            { image : `https://lh3.googleusercontent.com/sitesv/AICyYdawFPLJrGfebaPt_v7_LGx6upKd4k8_KPmp_CqVSopf7StEep9xq8Sh4PkfDeew5nmBxuA61f5a1XCcUNMPmlFWqjKTEc4gNOIO91NrkIi8-b2y1q9srjmO-DnSAlRdumYYkx0_eOUkbVspN01uWTykdKq-dJ_GmR_H7Pt91JJrXjFfpNq5mFVtrGEInZ_jPE4Ii-8_RBZ5GHjuugMqouzHebQTTpJWs3OGFQ4=w1280`,
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
