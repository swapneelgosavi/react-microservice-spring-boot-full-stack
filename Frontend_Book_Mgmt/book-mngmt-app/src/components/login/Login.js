import React , {Component} from 'react';
import AuthenticationService from '../../service/AuthenticationService.js';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username : '',
            password:'',
            isLoginFailed: false,
            showSuccessMessage:false
        }

        this.handleChange = this.handleChange.bind(this);
        this.doLogin=this.doLogin.bind(this);

    }

    handleChange(event) {

        //set form data into state object
        this.setState(
            {
                [event.target.name]: event.target.value                
            }
        )
    }

    doLogin() {
        
         if(this.state.username==='test' && this.state.password==='test'){
                AuthenticationService.registerSuccessfulLogin(this.state.username)
                this.props.history.push(`/welcome/${this.state.username}`)
                this.setState({showSuccessMessage:true})
                this.setState({isLoginFailed:false})
            }
            else {
                this.setState({showSuccessMessage:false})
                this.setState({isLoginFailed:true})
            }

    }

    render() {
        return(            
            <div className="container">
                
                    {this.state.isLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" className="form-control" name="username" onChange={this.handleChange}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}/>
                    </div>
                    
                    <button className="btn btn-success" onClick={this.doLogin}>Login</button>            
               
            </div>
        )
    }
}

export default Login