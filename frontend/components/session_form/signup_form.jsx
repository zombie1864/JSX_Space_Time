import React from 'react'; 

export class Signup extends React.Component {
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
        this.props.processForm(user)
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <input type="text"
                            value = {this.state.first_name}
                            placeholder='First Name'
                            onChange ={this.update('first_name')}/>
                    <input type="text"
                            value = {this.state.last_name}
                            placeholder='Last Name'
                            onChange ={this.update('last_name')}/>
                    <input type="text"
                            value = {this.state.username}
                            placeholder='username'
                            onChange ={this.update('username')}/>
                    <input type="text"
                            value = {this.state.email}
                            placeholder='email'
                            onChange ={this.update('email')}/>
                    <input type="password"
                            value = {this.state.password}
                            placeholder='password'
                            onChange ={this.update('password')}/>
                    <input type="submit" value = {this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default Signup

