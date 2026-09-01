import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import NewFooter from '../../Components/NewFooter/NewFooter'
import { Calendar1Icon, Loader } from 'lucide-react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMediaByGridHead } from '../../Api/MediaApi'

function UCUMediaEventsPageDetails() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMediaByGridHead("Events").then(res => {
            if (res?.success && res.data?.data) {
                const matched = res.data.data.find(e => 
                    e.slug === slug || 
                    e.title?.toLowerCase().replace(/[^a-z0-9]/g, "-") === slug
                );
                setEvent(matched || null);
            }
            setLoading(false);
        }).catch(err => {
            console.error("Error loading event detail:", err);
            setLoading(false);
        });
    }, [slug]);

    if (loading) {
        return (
            <div>
                <Navbar />
                <div className="flex h-96 items-center justify-center">
                    <Loader className="animate-spin text-success" size={32} />
                </div>
                <NewFooter />
            </div>
        );
    }

    if (!event) {
        return (
            <div>
                <Navbar />
                <div className="container text-center my-5 py-5">
                    <h2 className="text-danger">Event Not Found</h2>
                    <p className="text-muted">The requested event could not be loaded.</p>
                    <button className="btn btn-success mt-3" onClick={() => navigate("/media/ucu-on-at")}>
                        Back to Events
                    </button>
                </div>
                <NewFooter />
            </div>
        );
    }

    const displayTitle = event.title || event.head;
    const displayImg = event.image || "https://www.spjain.org/hubfs/Be-Here-Now-workshop-Masterclass-with-coach-Alekh-Sangal-and-Ankita-Brahmi-Luxury-MGLuxM-HBL-students-SP-Jain-Global-MAIN-EVENT-ARTICLE-PAGE.jpg";
    const bodyContent = event.detailsHtml || `<p>${event.content}</p>`;

    return (
        <div>
            <Navbar />
            <div className='d-flex flex-lg-row flex-column position-relative'>
                <div className='ucu-mepd-card'>
                    <h1>{displayTitle}</h1>
                    <div className='hr-line-mepd-page'></div>
                    <div className='d-flex gap-2 align-items-center'>
                        <Calendar1Icon />
                        <p className='mb-0'>{event.date}</p>
                    </div>
                </div>
                <img src={displayImg} className='ucu-mepd-image' alt="Event" />
            </div>
            <div className='captital-campus-content-sec my-5'>
                <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
            </div>
            <NewFooter />
        </div>
    )
}

export default UCUMediaEventsPageDetails;