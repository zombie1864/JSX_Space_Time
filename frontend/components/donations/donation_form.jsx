import React from 'react';
import { Link } from 'react-router-dom'; 

class DonationForm extends React.Component {
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
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();

        const donation = new FormData(); 
        const { 
            monthly_amount, 
            first_name, 
            last_name, 
            city, 
            state, 
            zip_code, 
            email 
        } = this.state;

        donation.append('donation[monthly_amount]', monthly_amount);
        donation.append('donation[first_name]', first_name);
        donation.append('donation[last_name]', last_name);
        donation.append('donation[city]', city);
        donation.append('donation[state]', state);
        donation.append('donation[zip_code]', zip_code);
        donation.append('donation[email]', email);
        // debugger
        this.props.submitDonation(donation); 
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
                            name='monthly_amount' 
                            onChange={this.onChange} 
                            value={this.state.monthly_amount}
                        />                  
                    <br/>
                    <label>First Name</label>
                    <br/>
                    <input  type='text' 
                            name='first_name' 
                            onChange={this.onChange} 
                            value={this.state.first_name} 
                        />                   
                    <br/>
                    <label>Last name</label>
                    <br/>
                    <input  type='text' 
                            name='last_name' 
                            onChange={this.onChange} 
                            value={this.state.last_name} 
                        />                    
                    <br/>
                    <label>City</label>
                    <br/>
                    <input  type='text' 
                            name='city' 
                            onChange={this.onChange} 
                            value={this.state.city}
                        />                    
                    <br/>
                    <label>State</label>
                    <br/>
                    <input  type='text' 
                            name='state' 
                            onChange={this.onChange} 
                            value={this.state.state}
                        />                    
                    <br/>
                    <label>Zip Code</label>
                    <br/>
                    <input  type='text' 
                            name='zip_code' 
                            onChange={this.onChange} 
                            value={this.state.zip_code}
                        />                    
                    <br/>
                    <label>Email</label>
                    <br/>
                    <input  type='text' 
                            name='email' 
                            onChange={this.onChange} 
                            value={this.state.email}
                        />
                    <br/>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default DonationForm