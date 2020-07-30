import React from 'react'; 

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
                <form onSubmit = {this.submit}>
                    <input type="text"
                            value = {this.state.email}
                            onChange = {this.update('email')}
                            placeholder = 'Email' />
                    <br/>
                    <br/>
                    <input type="password"
                            value = {this.state.password}
                            onChange = {this.update('password')}
                            placeholder = 'Password'/>
                    <br/>
                    <br/>
                    <input type="submit" value = {this.props.formType}/>
                    <br/>
                    <br/>
                    <button className = 'demo-sign' onClick = { this.demoUser }>Sign in as demoUser</button>
                </form>
            </div>
        )
    }
}

export default Login
