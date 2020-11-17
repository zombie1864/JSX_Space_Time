import React from 'react'; 
import { Link } from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            first_name: '', 
            last_name: '', 
            username: '', 
            email: '', 
            password: ''
        }

        this.submit = this.submit.bind(this); 
        this.demoUser = this.demoUser.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field] : e.currentTarget.value 
        })
    }
    
    submit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state); 
        this.props.processForm(user); 
    }

    demoUser(e) {
        e.preventDefault();
        const userDemo = {
            email: 'maxwell@spaceMail.com',
            password: 'epsilon'
        } 
        this.props.processForm(userDemo); 

    }

    render() {
        return (
            <div>
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
                    className = 'login_form_container'
                    >
                    <p className = 'login-text'>
                        Sign in with your JSX account
                    </p>
                    <br/>
                    <label
                        className = 'login-labels'>Email:</label>
                        <br/>
                    <input type="text"
                            value = {this.state.email}
                            onChange = {this.update('email')}
                            className = 'login-input'
                            />
                    <br/>
                    <br/>
                    <label
                        className = 'login-labels'>Password:</label>
                        <br/>
                    <input type="password"
                            value = {this.state.password}
                            onChange = {this.update('password')}
                            className = 'login-input'
                            />
                    <br/>
                    <br/>
                    <input 
                        type="submit" 
                        value = {this.props.formType}
                        className = 'login-btn'/>
                    <br/>
                    <br/>
                    <button  
                        onClick = { this.demoUser }
                        className = 'demo-btn'
                        >Sign in as Demo User</button>
                </form>
            </div>
        )
    }
}

export default Login
