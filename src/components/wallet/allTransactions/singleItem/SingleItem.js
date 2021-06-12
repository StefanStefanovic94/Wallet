import React from "react"
import "./singleItem.css"

const SingleItem = ({ amount, description, svg, created }) => {

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const date = new Date(created);
    let day = date.getDay() + 1
    const month = date.toLocaleString('default', { month: 'long' });

    return (
        <div className="singleItem">
            <div className="leftDiv">
                <div className="dateWrap">
                    <h2>{day}</h2>
                    <h3>{month}</h3>
                </div>
                <div>
                    <img src={svg} alt="icon" />
                </div>
            </div>
            <div className="rightDiv">
                <h3>{description}</h3>
                <h2>{numberWithCommas(amount)}<span>RSD</span></h2>
            </div>
        </div>
    )
}


export default SingleItem