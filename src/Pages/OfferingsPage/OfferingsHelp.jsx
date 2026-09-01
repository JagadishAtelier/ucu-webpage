import React from 'react'

function OfferingsHelp({ getKeyValue }) {
  const kv = (key, fallback) => (getKeyValue ? getKeyValue("OfferingsHelp", key, fallback) : fallback);

  const title = kv("title", "Academic Accelerator");
  const subtitle = kv("subtitle", "Propositions that evolve and adapt to your needs.");
  const description = kv("description", "Every institutional challenge is distinct, which is why only bespoke academic interventions deliver real impact. The UCU Accelerator is built on a legacy of transformative educational design—crafting strategies from the ground up to drive rapid, sustainable performance improvement across pedagogy, governance, and career outcomes");

  return (
    <div className='captital-campus-content-sec mt-4'>
        <h1 className='display-4 fw-bold' style={{ color: "#5ac501" }}>{title}</h1>
        <p className='fw-bold fs-5'>{subtitle}</p>
        <p>{description}</p>
    </div>
  )
}

export default OfferingsHelp