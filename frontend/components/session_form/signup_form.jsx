import React from 'react'; 
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container'

export class Signup extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name: '', 
             last_name: '', 
             email: '', 
             password: ''
        }
        this.submit = this.submit.bind(this); 
    }
    
    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value
        })
    }

    submit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state); 
        this.props.processForm(user)
    }
    
    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
    componentWillUnmount() { //clears the error message for the next session 
        // debugger
        this.props.clearErrors() //<- add this to mdp 
    }
    
    render() {
        return (

            <div className = 'sign-up'>
                <div className = 'main-menu'>
                    <header>
                        <Link to = '/' className = 'signup-header-link'>
                            <h1>
                                <img className = 'home-icon' src={window.solar_system_favicon} alt="HOME"/>
                            </h1>
                        </Link>
                    </header> 
                </div>

                <form 
                    onSubmit = {this.submit} 
                    className = 'signup_form_container'
                    >
                    <div>{ this.renderErrors() }</div>
                    <h1
                        className = 'signup_slogan'
                        >Create a JSX Account</h1>
                        <label
                            className = 'labels'>First Name:</label>
                        <br/>
                        <input type="text"
                                value = {this.state.first_name}
                                onChange ={this.update('first_name')}
                                className = 'signup-input'/>
                                <br/><br/>
                        <label
                            className = 'float-right labels-right'
                        >Last Name:</label>
                            <br/>
                        <input type="text"
                                value = {this.state.last_name}
                                onChange ={this.update('last_name')}
                                className = 'float-right signup-input'/>
                                <br/>
                        <label
                            className = 'labels'>Email:</label>
                        <br/>
                        <input type="text"
                                value = {this.state.email}
                                onChange ={this.update('email')}
                                className = 'signup-input'/>
                                <br/><br/>
                        <label
                            className = 'float-right labels-right'>Password:</label>
                        <br/>
                        <input type="password"
                                value = {this.state.password}
                                onChange ={this.update('password')}
                                className = 'float-right signup-input'/>
                                <br/><br/>

                    <input 
                        type = "submit" 
                        value = {this.props.formType}
                        className = 'signup-btn'
                        />
                </form>
                <div>{this.renderErrors()}</div>
            </div>
        )
    }
}

export default Signup

