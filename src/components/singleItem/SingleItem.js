import React from "react"

class SingleItem extends React.Component {
    constructor({ amount, description, svg }) {
        super()
    }
    render() {
        return (
            <div>
                <img src={this.props.svg}  />
                <h2>{this.props.amount}</h2>
                <h2>{this.props.description}</h2>
            </div>
        )
    }
}

export default SingleItem