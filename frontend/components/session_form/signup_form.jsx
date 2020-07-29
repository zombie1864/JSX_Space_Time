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

    renderErrors() {
        // i don't think i need errors.map( (error), i )
        return (
            <ul> 
                { Object.values(this.props.errors) }
            </ul>
        )
    }
    
    render() {
        return (
            <div>
                <form onSubmit = {this.submit}>
                    <br/>
                    <input type="text"
                            value = {this.state.first_name}
                            placeholder='First Name'
                            onChange ={this.update('first_name')}/>
                            <br/><br/>
                    <input type="text"
                            value = {this.state.last_name}
                            placeholder='Last Name'
                            onChange ={this.update('last_name')}/>
                            <br/><br/>
                    <input type="text"
                            value = {this.state.username}
                            placeholder='username'
                            onChange ={this.update('username')}/>
                            <br/><br/>
                    <input type="text"
                            value = {this.state.email}
                            placeholder='email'
                            onChange ={this.update('email')}/>
                            <br/><br/>
                    <input type="password"
                            value = {this.state.password}
                            placeholder='password'
                            onChange ={this.update('password')}/>
                            <br/><br/>
                    <input type="submit" value = {this.props.formType}/>
                </form>
                <div>{this.renderErrors()}</div>
            </div>
        )
    }
}

export default Signup

