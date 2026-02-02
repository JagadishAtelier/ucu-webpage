import React from 'react'
import './LeaderShipPage.css'
function LeaderShipPeople({ teams, oldMembers }) {
    let displayTeams = [];
    if (teams && teams.length > 0) {
        displayTeams = teams;
    } else if (oldMembers && oldMembers.length > 0) {
        displayTeams = [{ title: "Meet our leadership team.", members: oldMembers }];
    } else if (!teams && !oldMembers) {
        // Fallback if no props passed (dev mode or loading) - shows nothing or could show loading
        return null;
    }

    return (
        <>
            {displayTeams.map((team, teamIndex) => (
                <div className='mt-5' key={teamIndex}>
                    <p className='text-center leader-top-head mb-3'>LEADERSHIP</p>

                    <h1 className='text-center mb-5 display-4 fw-bold col-12'>
                        {team.title && team.title.toLowerCase().includes('meet our') ? (
                            <>Meet our <span style={{ color: "#5ac501" }}> {team.title.replace(/meet our/i, '')}</span></>
                        ) : (
                            <span style={{ color: "#5ac501" }}>{team.title}</span>
                        )}
                    </h1>

                    <div className='d-grid px-3 px-lg-5'>
                        <div className='row row-gap-5'>
                            {team.members.map((item, i) => (
                                <div className='col-lg-3 col-12 col-md-6 d-flex flex-column gap-2 align-items-center' key={i}>
                                    <div className='leader-ship-bg-design'>
                                        <img src={item.image} className='leader-ship-bg-design-img' alt={item.name} />
                                    </div>
                                    <p className='m-0 leader-name-color fs-3'>{item.name}</p>
                                    <p className='m-0 text-center'>{item.designation || item.prof}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default LeaderShipPeople