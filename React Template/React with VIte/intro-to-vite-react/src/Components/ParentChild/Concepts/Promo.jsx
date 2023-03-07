import React from 'react'
import PromoHeading from './PromoHeading.jsx'

// Soruce of Truth
const data={
    heading: `99% of all items!`,
    callToAction: `Everything must go!`
}

function Promo(props) {
    return(
        <div>
            <PromoHeading
            heading={data.heading}
            callToAction={data.callToAction}
            callBackFunction={props.heading}
            
            />1
        </div>
    )
}

export default Promo