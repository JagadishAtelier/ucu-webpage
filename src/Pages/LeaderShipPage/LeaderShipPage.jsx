import React from 'react'
import './LeaderShipPage.css'
import founderImg from "/founder.jpg";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import NewFooter from '../../Components/NewFooter/NewFooter';
import LeaderShipPeople from './LeaderShipPeople';
import { RiDoubleQuotesR } from 'react-icons/ri';
function LeaderShipPage() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/about/page/leadership`);
        const result = await response.json();
        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.error("Failed to load leadership data", error);
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

      <div className='captital-campus-content-sec consortium-founder-container'>
        <div className=''>

          <div className='card-consortium-founder position-relative'>
            <RiDoubleQuotesR className='quotes-consortium d-lg-block d-none' />
            <img src={data.founderImage || '/founder.jpg'} className='consortium-founder-image' alt="Founder" />
            <div className='d-flex flex-column mt-2 col-12 d-lg-none d-block'>
              <p className='fw-bold m-0 pt'>{data.founderName}</p>
              <p className='m-0 pt'> {data.founderTitle}</p>
            </div>
            <div className='col-lg-7 pt' dangerouslySetInnerHTML={{ __html: data.founderDescription }}></div>
          </div>
          <div className='justify-content-end my-4 col-11 d-lg-flex d-none'>
            <p className='fw-bold consortium-founder-name'>{data.founderName}</p>
            <p className='ps-2'> {data.founderTitle}</p>
          </div>
        </div>
      </div>
      <LeaderShipPeople teams={data.leadershipTeams} oldMembers={data.teamMembers} />
      <NewFooter />
    </div>
  )
}

export default LeaderShipPage