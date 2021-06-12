import React from "react"
import SingleItem from "./singleItem/SingleItem"

const AllTransactions = ( {allTrans} ) => {
    return (
        <div>{
            allTrans.map((trans, index) => {
                return (
                    <SingleItem amount={trans.amount} description={trans.description} svg={trans.icon_svg} created={trans.created}/>
                )
            })
        }</div>
    )
}

export default AllTransactions