import axios from "axios";
import React from "react"
import SingleCategories from "./singleCategories/SingleCategories";
import { Link } from "react-router-dom"

class AddExpenses extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            amount: 0,
            description: "",
            idCheckbox: ""
        }
    }



    setAmount = (event) => {
        this.setState({ amount: event.target.value });
    };

    setDescription = (event) => {
        this.setState({ description: event.target.value });
    };
    setId = (event) => {
        this.setState({ idCheckbox: event.target.id });
    };

    submitCredentials = () => {
        const headers = {
            'Authorization': `${localStorage.token}`

        };

        const payload = {
            amount: this.state.amount,
            category: this.state.idCheckbox,
            currency: "RSD",
            description: this.state.description,
        };
        axios
            .post(`https://budgetapp.digitalcube.rs/api/transactions`, payload, { headers }
            )
            .then((response) => {
                console.log(response);
                localStorage.setItem(
                    "token",
                    (response.data.token)
                );
                // this.props.history.push("/wallet");
            })
            .catch((error) => alert("wrong"));
        // console.log(localStorage);
    };

    componentDidMount() {
        const headers = {
            'Authorization': `${localStorage.token}`

        };

        axios.get(`https://budgetapp.digitalcube.rs/api/transactions/categories?category_type=outcome`, { headers })
            .then(response => {
                this.setState({ categories: response.data })
            }
            );

    }


    render() {
        return (
            <div className="wrapLogin">
                {console.log(this.state.categories)}
                <div className="userNameInput">
                    <label></label>
                    <input

                        onChange={this.setAmount}
                        type="text"
                        placeholder="Amount"
                    />
                </div>
                <div className="passwordInput">
                    <label >*</label>
                    <input

                        onChange={this.setDescription}
                        type="text"
                        placeholder="Description"
                    />
                    <div className="eyeIcon">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M8.50004 4.25004C11.1846 4.25004 13.5788 5.75879 14.7475 8.14587C13.5788 10.533 11.1846 12.0417 8.50004 12.0417C5.81546 12.0417 3.42129 10.533 2.25254 8.14587C3.42129 5.75879 5.81546 4.25004 8.50004 4.25004ZM8.50004 2.83337C4.95837 2.83337 1.93379 5.03629 0.708374 8.14587C1.93379 11.2555 4.95837 13.4584 8.50004 13.4584C12.0417 13.4584 15.0663 11.2555 16.2917 8.14587C15.0663 5.03629 12.0417 2.83337 8.50004 2.83337ZM8.50004 6.37504C9.47754 6.37504 10.2709 7.16837 10.2709 8.14587C10.2709 9.12337 9.47754 9.91671 8.50004 9.91671C7.52254 9.91671 6.72921 9.12337 6.72921 8.14587C6.72921 7.16837 7.52254 6.37504 8.50004 6.37504ZM8.50004 4.95837C6.74337 4.95837 5.31254 6.38921 5.31254 8.14587C5.31254 9.90254 6.74337 11.3334 8.50004 11.3334C10.2567 11.3334 11.6875 9.90254 11.6875 8.14587C11.6875 6.38921 10.2567 4.95837 8.50004 4.95837Z" fill="black" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="button">
                    <Link to="/wallet">
                        <button onClick={this.submitCredentials}>
                            Submit
                        </button>
                    </Link>
                </div>

                <div>
                    <SingleCategories categories={this.state.categories} setId={this.setId} />
                </div>
            </div>
        );
    }
}







export default AddExpenses