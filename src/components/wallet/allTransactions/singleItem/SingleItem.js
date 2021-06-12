import React from "react"
import "./singleItem.css"

const SingleItem = ({ amount, description, svg, created }) => {

    const date = new Date(created);
    let day = date.getDay() + 1
    const month = date.toLocaleString('default', { month: 'long' });
    console.log(month);

    return (
        <div className="singleItem">
            <div>
                <h2>{day}{month}</h2>
                <img src={svg} alt="icon" />
            </div>
            <div>
                <h2>{amount}</h2>
                <h2>{description}</h2>
            </div>
        </div>
    )
}


export default SingleItem