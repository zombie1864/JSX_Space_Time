import React from 'react';
import { Link } from 'react-router-dom'; 

const initialState = {
    monthly_amount: '', 
    first_name: '', 
    last_name: '', 
    city: '', 
    state: '', 
    zip_code: '', 
    email: ''
}

class DonationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
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
        this.props.submitDonation(donation)
        // .then(push to his); 
        this.setState(initialState)
        this.props.history.push('/donation_show') // comes from props/React
        //history.push -> redirects to url 

    }

    render() {
        return (
            <div>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'signup-header-link'>
                            <h1>
                                <img className = 'home-icon' src={window.Home_icon} alt="HOME"/>
                            </h1>
                        </Link>
                    </header> 
                </div>
                <div className = 'donation_container'>
                    <br/>
                    <form action='submit' onSubmit = {this.onSubmit}>
                        <label 
                            className = 'label_name donation-float-left-label-amt'
                            >Monthly Amount:</label>
                        <br/>
                        <label 
                            className = 'label_name dollar-label'
                            >$</label>
                        <input  type='text' 
                                name='monthly_amount' 
                                onChange={this.onChange} 
                                value={this.state.monthly_amount} 
                                className = 'input_style donation-float-left-amt'
                            />                  
                        <br/>
                        <label 
                            className = 'label_name donation-float-left-label-fname'
                            >First Name:</label>
                        <br/>
                        <input  type='text' 
                                name='first_name' 
                                onChange={this.onChange} 
                                value={this.state.first_name} 
                                className = 'input_style donation-float-left-fname'
                            />                   
                        <br/>
                        <div className = 'lname'>
                            <label 
                                className = 'label_name donation-float-right-label-lname'
                                >Last name:</label>
                            <br/>
                            <input  type='text' 
                                    name='last_name' 
                                    onChange={this.onChange} 
                                    value={this.state.last_name} 
                                    className = 'input_style donation-float-right-lname'
                                />                    
                        </div>
                        <div className = 'city'>
                            <label 
                                className = 'label_name donation-float-left-label-city'
                                >City:</label>
                            <br/>
                            <input  type='text' 
                                    name='city' 
                                    onChange={this.onChange} 
                                    value={this.state.city}
                                    className = 'input_style donation-float-left-city'
                                />                    
                            <br/>
                        </div>
                        <div className = 'state'>
                            <label 
                                className = 'label_name donation-float-mid-label-state'
                                >State:</label>
                            <br/>
                            <input  type='text' 
                                    name='state' 
                                    onChange={this.onChange} 
                                    value={this.state.state}
                                    className = 'input_style donation-float-mid-state'
                                />                    
                            <br/>
                        </div>
                        <div className = 'zip_code'>
                            <br/>
                            <label 
                                className = 'label_name donation-float-right-label-zip'
                                >Zip Code:</label>
                                <br/>
                            <input  type='text' 
                                    name='zip_code' 
                                    onChange={this.onChange} 
                                    value={this.state.zip_code}
                                    className = 'input_style donation-float-right-zip'
                                />                    
                            <br/>
                        </div>
                        <div>
                            <label 
                                className = 'label_name'
                                >Email:</label>
                            <br/>
                            <input  type='text' 
                                    name='email' 
                                    onChange={this.onChange} 
                                    value={this.state.email}
                                    className = 'input_style donation-float-left-email'
                                />
                            <br/>
                        </div>
                    </form>
                </div>
                <button 
                    type = 'submit'
                    className = 'submit_btn'
                    >SUBMIT DONATION</button>
            </div>
        )
    }
}

export default DonationForm