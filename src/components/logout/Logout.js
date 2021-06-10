import React from "react"
import axios from "axios"

class Wallet extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        // GET request using axios with set headers
        const headers = {
            'Authorization': `${localStorage.token}`

        };
        axios.get(`https://budgetapp.digitalcube.rs/api/tenants/77bd5a17-d27d-45b3-88fe-4cd8384a297e/sessions?`, { headers })
            .then(response => {
                console.log(response);
                this.setState({ totalReactPackages: response.data.total })
            }
            );
    }

    render() {
        return (
            <div>wallet</div>
        )
    }
}

export default Wallet