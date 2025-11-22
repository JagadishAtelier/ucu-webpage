import React from 'react'
import './NewFac.css'
import { useNavigate } from 'react-router-dom'
const data = [
  { name: "Seema Khanvilkar", prof: "Program Director", image: "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/shibani_belwalkar_cv-1.jpg" },
  { name: "Veronica Vecchi", prof: "Academic Director", image: "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/maurizio_poli_cv.jpg" },
]
const imbDirectors = [
  { name: "Shibani Belwalkar", prof: "Program Director", image: "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/misb-prof-seema-Khanvilkar.jpg" },
  { name: "Maurizio Poli", prof: "Academic Director", image: "https://sdabocconiasiacenter.com/wp-content/uploads/2024/07/maurizio_poli_cv.jpg" },
]

function NewFacDirectors() {
    const  navigate = useNavigate();

    const handleGoToCV = (person) => {
        navigate("/profile/details", { state: person }); 
      };
  // Split data into pairs for each card
  const pairs = []
  for (let i = 0; i < data.length; i += 2) {
    pairs.push(data.slice(i, i + 2))
  }
  const pairsTwo = []
  for (let i = 0; i < imbDirectors.length; i += 2) {
    pairsTwo.push(imbDirectors.slice(i, i + 2))
  }

  return (
    <div>
    <div className="py-5 bg-light px-lg-5 px-4">
      <h2 className="display-4 fw-bold">UCU <span style={{ color: "#5ac501" }}>Directors</span></h2>

      <div className="row gy-4 gx-0">
        {pairs.map((pair, idx) => (
          <div key={idx} className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center p-3 rounded shadow-sm bg-color-card">
              
              {pair.map((person, i) => (
                <div key={i} className="card-width-fac d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="rounded-circle me-md-3 mb-2 mb-md-0 director-img"
                  />
                  <div className=' text-center text-lg-start'>
                    <h5 className="mb-2 fs-4">{person.name}</h5>
                    <p className="text-muted mb-0">{person.prof}</p>
                    <button
              className="btn btn-link text-decoration-none p-0 mt-2"
              onClick={() => handleGoToCV(person)}
            >
              view CV
            </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="pb-lg-5 bg-light px-lg-5 px-4">
      <div className="row gy-4 gx-0">
        {pairsTwo.map((pair, idx) => (
          <div key={idx} className="col-12">
            <div className="d-flex flex-column flex-md-row justify-content-evenly align-items-center p-3 rounded shadow-sm bg-color-card">
              
              {pair.map((person, i) => (
                <div key={i} className="card-width-fac d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="rounded-circle me-md-3 mb-2 mb-md-0 director-img"
                  />
                  <div className='text-center text-lg-start'>
                    <h5 className="mb-2 fs-4">{person.name}</h5>
                    <p className="text-muted mb-0">{person.prof}</p>
                    <button
              className="btn btn-link text-decoration-none p-0 mt-2"
              onClick={() => handleGoToCV(person)}
            >
              view CV
            </button>
                  </div>
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default NewFacDirectors
