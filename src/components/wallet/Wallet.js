import React from "react"
import axios from "axios"

class Wallet extends React.Component {
    constructor() {
        super();
        this.state = {
            transactions: {}
        }
    }

    componentDidMount() {
        const headers = {
            'Authorization': `${localStorage.token}`

        };
        axios.get(`https://budgetapp.digitalcube.rs/api/transactions?`, { headers })
            .then(response => {
                // console.log(response);
                this.setState({ transactions: response.data.transactions })
            }
            );
    }

    render() {
        return (
            <div>wallet
                {console.log(this.state.transactions)}
            </div>
        )
    }
}

export default Wallet