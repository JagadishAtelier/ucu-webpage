import React from 'react'
const data = [
    { number : "700+",text : "Staff Members"},
    { number : "49%",text : "Gender Diversity (Women in Staff)"},
    { number : "70+",text : "Resident Faculty"},
    { number : "200+",text : "Long Service Staff"},
    { number : "25+",text : "Language Speakers"},
    { number : "90+",text : "Research Staff"},
]
function CareersPageBuild() {
  return (
    <div className="captital-campus-content-sec my-5">
        <h1 className='display-4 fw-bold col-12'>Build a Career <span style={{color:"#5ac501"}}>with ISB</span></h1>
        <p>UCU intends to work with people who ensure a learning and progressive environment; and to provide them with an enriching career journey. We can stay true to our vision and mission only with the right talent and diverse teams. If you intend to make a difference in the education sector, ISB would like to hear from you.</p>
    <div className='d-grid cpb-data-grid'>
        <div className='row row-gap-5'>
            {data.map((item,index)=>(
                <div className='col-lg-4 col-6 cpb-data-div'>
                    <h1 className='display-4 fw-bold'>{item.number}</h1>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default CareersPageBuild