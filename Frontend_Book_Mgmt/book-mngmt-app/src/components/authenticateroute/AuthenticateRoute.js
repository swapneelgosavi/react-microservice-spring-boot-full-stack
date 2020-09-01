import React , {Component} from 'react';
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../../service/AuthenticationService.js'

//this is component to authenticate all the routes. 
//It will redirect to Login if user is not loggedin

//let a = [1,2,3] >>>> ...a >>> [0],[1],[2]

class AuthenticatedRoute extends Component {

    render() {

                if (AuthenticationService.isUserLoggedIn()) {
                    return <Route {...this.props} />
                } else {
                    return <Redirect to="/login" />
                }            
        
    }
    
}

export default AuthenticatedRoute
