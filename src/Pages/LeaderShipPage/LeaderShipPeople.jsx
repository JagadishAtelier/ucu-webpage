import React from 'react'
import './LeaderShipPage.css'
const data = [
    { name : "Aneel Bhusri" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Dave Duffield" , prof : "Co-Founder and CEO Emeritus",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Carl Eschenbach" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Peter Bailis" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Patrick Blair" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Emma Chalwin" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Rob Enslin" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Aneel Bhusri" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Dave Duffield" , prof : "Co-Founder and CEO Emeritus",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Carl Eschenbach" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Peter Bailis" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Patrick Blair" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Emma Chalwin" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
    { name : "Rob Enslin" , prof : "Co-Founder and Executive Chair",image : "https://static.vecteezy.com/system/resources/thumbnails/041/642/167/small_2x/ai-generated-portrait-of-handsome-smiling-young-man-with-folded-arms-isolated-free-png.png"},
]
function LeaderShipPeople() {
  return (
    <>
    <div className='mt-5'>
        <p className='text-center leader-top-head mb-3'>LEADERSHIP</p>

        <h1 className='text-center mb-5 display-4 fw-bold col-12'>Meet our <span style={{color:"#5ac501"}}> leadership team.</span></h1>

        <div className='d-grid px-3 px-lg-5'>
            <div className='row row-gap-5'>
            {data.map((item , i)=>(
               <div className='col-lg-3 col-12 col-md-6 d-flex flex-column gap-2 align-items-center'>
                    <div className='leader-ship-bg-design'>
                        <img src={item.image} className='leader-ship-bg-design-img'/>
                    </div>
                    <p className='m-0 leader-name-color fs-3'>{item.name}</p>
                    <p className='m-0'>{item.prof}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
    <div className='mt-5'>
        <p className='text-center leader-top-head mb-3'>LEADERSHIP</p>

        <h1 className='text-center mb-5 display-4 fw-bold col-12'>Meet our <span style={{color:"#5ac501"}}> leadership team.</span></h1>

        <div className='d-grid px-3 px-lg-5'>
            <div className='row row-gap-5'>
            {data.map((item , i)=>(
               <div className='col-lg-3 col-12 col-md-6 d-flex flex-column gap-2 align-items-center'>
                    <div className='leader-ship-bg-design'>
                        <img src={item.image} className='leader-ship-bg-design-img'/>
                    </div>
                    <p className='m-0 leader-name-color fs-3'>{item.name}</p>
                    <p className='m-0'>{item.prof}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default LeaderShipPeople