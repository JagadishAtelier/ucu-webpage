import React from 'react'
import './Advisory.css'
import { useParams } from "react-router-dom";
import { FaLinkedin,FaChevronRight } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';
import NewFooter from '../NewFooter/NewFooter';
const councils = [
    {
        type: "bac",
        gridHead: <>Meet Our <span className="color-highlight">Business Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Business Advisory Council",
        sec2head : "Business Advisory Council",
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
        gridHead: <>Meet Our <span className="color-highlight">Business Advisors</span></>,
        bgImage : `https://lh3.googleusercontent.com/sitesv/AICyYdYlVhFz3Yp8Ibu9gv-OeFtuWHbZvwS0Z4RbRmh68aUw5RZ2tYN16pR95DxevTGOZmmrxOo8QPGhWaLgi8nGQlYk1lK2WILON31KgCmN2srfmvSqiZcaymWp5qb5ZZqJ96EWZXfm4HdXkuuAzXPLvCXBw243_7dFUBtIC2WIy88VYpVm2zS_Ws2k=w16383`,
        bannerHead : "Business Advisory Council",
        sec2head : "Business Advisory Council",
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
    <div
      data-aos="fade-down"
      className="fac-hero-section d-flex flex-column flex-lg-column align-items-center justify-content-center justify-content-lg-center text-white text-center text-lg-start p-3 p-lg-5 p-lg-7"
      style={{
        backgroundImage: `url(${council.bgImage })`,
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

      <section className="container  justify-content-center align-items-center">
  <div>
    <h1 className="display-4 fw-bold col-12 text-center my-5">
      {council.gridHead}
    </h1>
  </div>

  {/* row-cols ensures 3 per row, justify-content-center keeps last row centered */}
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mb-lg-5 mb-5">
    {council.staff.map((person, idx) => (
      <div key={idx} className="col d-flex">
        <div className="staff-card d-flex flex-column justify-content-between align-items-center text-center w-100">
          {/* Image */}
          <img src={person.image} alt={person.name} className="staff-img" />

          {/* Name & Profession */}
          <div className="mt-3">
            <h4 className="fs-4 fw-bold text-uppercase mb-2">{person.name}</h4>
            <p className="fs-5 color-highlight mb-2 font-bold">{person.prof}</p>
          </div>

          {/* Footer (LinkedIn + Company Logo) */}
          <div className="d-flex flex-column align-items-center gap-2">
            <FaLinkedin size={30} className="linkedin-icon" />
            {/* {person.comLogo && (
              <img src={person.comLogo} alt="Company Logo" className="company-logo" />
            )} */}
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
