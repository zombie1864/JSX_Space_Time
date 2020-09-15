import React from 'react';
import { Link } from 'react-router-dom'; 

export class DonationsForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            monthly_amount: '', 
            first_name: '', 
            last_name: '', 
            city: '', 
            state: '', 
            zip_code: '', 
            email: ''
        }
        this.onChange = this.onChange.bind(this); 
        this.onSubmit = this.onSubmit.bind(this); 
    }

    onChange(e) {
        this.setState([e.target.name] = e.target.value)
    }

    onSubmit(e) {
        e.preventDefault();
        const form = {
            monthly_amount: this.state.monthly_amount, 
            first_name: this.state.first_name,
            last_name: this.state.last_name, 
            city: this.state.city, 
            state: this.state.state, 
            zip_code: this.state.zip_code, 
            email: this.state.email
        }
        this.props.createDonation(form); 
    }

    render() {
        return (
            <div>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'header-link'>
                            <h1>
                                <img className = 'home-icon' src={window.Home_icon} alt="HOME"/>
                            </h1>
                        </Link>
                    </header> 
                </div>
                <br/>
                <form action='submit' onSubmit = {this.onSubmit}>
                    <label>Monthly Amount</label>
                    <br/>
                    <input type='text' name='monthly amount' onChange={this.onChange}/>
                    {/* value={this.state.entities.donations.monthly_amount}                     */}
                    <label>First Name</label>
                    <br/>
                    <input type='text' name='first name' onChange={this.onChange}/>               
                    {/* value={this.state.entities.donations.first_name}      */}
                    <label>Last name</label>
                    <br/>
                    <input type='text' name='last name' onChange={this.onChange}/>                    
                    {/* value={this.state.entities.donations.last_name} */}
                    <label>City</label>
                    <br/>
                    <input type='text' name='city' onChange={this.onChange} />                    
                    {/* value={this.state.entities.donations.city} */}
                    <label>State</label>
                    <br/>
                    <input type='text' name='state' onChange={this.onChange} />           
                    {/* value={this.state.entities.donations.state}          */}
                    <label>Zip Code</label>
                    <br/>
                    <input type='text' name='zip Code' onChange={this.onChange}/>       
                    {/* value={this.state.entities.donations.zip_code}              */}
                    <label>Email</label>
                    <br/>
                    <input type='text' name='email' onChange={this.onChange} />
                    {/* value={this.state.entities.donations.email} */}
                </form>
            </div>
        )
    }
}

export default DonationsForm