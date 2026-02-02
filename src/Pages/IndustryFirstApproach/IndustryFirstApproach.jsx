import React from 'react'
import './IndustryFirstApproach.css'
import { ChevronRight } from 'lucide-react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import IndustryApproachContent from './IndustryApproachContent'
function IndustryFirstApproach() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/about/page/industry-approach`);
                const result = await response.json();
                if (result.success) {
                    setData(result.data);
                }
            } catch (error) {
                console.error("Failed to load industry approach data", error);
            }
        };
        fetchData();
    }, []);

    if (!data) return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <NewFooter />
        </div>
    );

    return (
        <div>
            <Navbar />
            <div
                className="fac-hero-section d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start text-white text-center text-md-start text-lg-start p-3 p-lg-5 p-lg-7"
                style={{
                    backgroundImage: `url(${data.bannerImage || 'https://img.freepik.com/premium-photo/communication-feedback-chos-role_1077802-145596.jpg?uid=R175611833&ga=GA1.1.1276842385.1760516584&semt=ais_hybrid&w=740&q=80'})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "60vh",
                }}
            >
                <div
                    className="w-100 w-lg-75 w-lg-50 ms-lg-5"
                >
                    {/* Dynamic Title */}
                    <h1 className="fw-bold fs-1 fs-lg-1">{data.heroTitle || "Industry Approach"}</h1>
                </div>

                <div className='position-absolute bottom-0 left-0 d-flex align-items-center campus-route-bg py-3'>
                    <p className='m-0'>UCU</p>
                    <ChevronRight />
                    <p className='m-0'>{data.title || "Industry Approach"}</p>
                </div>

            </div>
            <IndustryApproachContent
                features={data.features}
                title={data.contentTitle}
                description={data.contentDescription}
            />
            <NewFooter />
        </div>
    )
}

export default IndustryFirstApproach