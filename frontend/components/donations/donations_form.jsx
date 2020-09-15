import React from 'react';
import { Link } from 'react-router-dom'; 
import { createDonation } from '../../util/donation_api_util';

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
        // this.state = this.props.form
    }

    onChange(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        // const form = {
        //     monthly_amount: this.state.entities.donations.monthly_amount, 
        //     first_name: this.state.entities.donations.first_name,
        //     last_name: this.state.entities.donations.last_name, 
        //     city: this.state.entities.donations.city, 
        //     state: this.state.entities.donations.state, 
        //     zip_code: this.state.entities.donations.zip_code, 
        //     email: this.state.entities.donations.email
        // }
        // const form = Object.assign({}, this.state); 
        // this.props.createDonation(form); 
        const donation = new FormData(); 

        donation.append('donations[monthly_amount]', this.state.monthly_amount);
        donation.append('donations[first_name]', this.state.first_name);
        donation.append('donations[last_name]', this.state.last_name);
        donation.append('donations[city]', this.state.city);
        donation.append('donations[state]', this.state.state);
        donation.append('donations[zip_code]', this.state.zip_code);
        donation.append('donations[email]', this.state.email);
        this.props.createDonation(donation); 
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
                    <input  type='text' 
                            name='monthly amount' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.monthly_amount}
                        />                  
                    <br/>
                    <label>First Name</label>
                    <br/>
                    <input  type='text' 
                            name='first name' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.first_name} 
                        />                   
                    <br/>
                    <label>Last name</label>
                    <br/>
                    <input  type='text' 
                            name='last name' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.last_name} 
                        />                    
                    <br/>
                    <label>City</label>
                    <br/>
                    <input  type='text' 
                            name='city' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.city}
                        />                    
                    <br/>
                    <label>State</label>
                    <br/>
                    <input  type='text' 
                            name='state' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.state}
                        />                    
                    <br/>
                    <label>Zip Code</label>
                    <br/>
                    <input  type='text' 
                            name='zip Code' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.zip_code}
                        />                    
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input  type='text' 
                            name='email' 
                            onChange={this.onChange} 
                            // value={this.state.entities.donations.email}
                        />
                    <br/>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default DonationsForm