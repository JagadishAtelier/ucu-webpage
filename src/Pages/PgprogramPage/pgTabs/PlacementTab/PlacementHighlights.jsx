import React from 'react'
import './PlacementTab.css'
import { CircleArrowDown, CircleFadingArrowUp } from 'lucide-react'

const data = [
    {number  : "224",para : "Participant Companies"},
    {number  : "224",para : "Participant in batch"},
    {number  : "224",para : "Total number of pre-[lacement] offer"},
    {number  : "224",para : "Average Salary "},
    {number  : "224",para : "Medium Salary "},
    {number  : "224",para :"High Salary "},
]
function PlacementHighlights() {
  return (
    <div>
        <div className='d-flex flex-lg-row flex-column justify-content-between align-items-lg-center align-items-start  mt-5'>
            <h1 className='fs-2 fw-medium'>Final placements 2025 highlights</h1>
            <div className='d-flex gap-2 press-note-btn'>
                <CircleArrowDown style={{margin:"0"}}/>
                <p className='m-0'>Placement 2025 press note</p>
            </div>
        </div>
<div className="container highlight-box mt-5">
  <div className="row">
    {data.map((item, i) => {
      const isLastColumn = (i + 1) % 3 === 0; // every 3rd item in lg
      const isLastRow = i >= data.length - 3; // last 3 items (last row)
      
      const borderStyle = {
        borderRight: isLastColumn ? "none" : "4px solid white",
        borderBottom: isLastRow ? "none" : "4px solid white",
        padding: "5%",
      };

      return (
        <div
          key={i}
          className="col-lg-4 col-md-6 col-12 text-center"
          style={borderStyle}
        >
          <h1>{item.number}</h1>
          <p>{item.para}</p>
        </div>
      );
    })}
  </div>
</div>



    </div>
  )
}

export default PlacementHighlights