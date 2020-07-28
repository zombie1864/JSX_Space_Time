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
                    <input type="submit" value = {this.props.formType}/>
                    <button onClick= { () => this.props.login()}></button>
                </form>
            </div>
        )
    }
}

export default Login
