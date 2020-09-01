import React , {Component} from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';
import { withRouter } from 'react-router';   //added this to refresh menus

class Header extends Component {
  
    render() {
      const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
      console.log(isUserLoggedIn);


      return (
             
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary">
              <div><a href="http://www.test.xyz" className="navbar-brand">swapgo</a></div>
              <ul className="navbar-nav">
                  {isUserLoggedIn && <li> <Link className="nav-item active nav-link" to="/welcome/test" >Home </Link> </li>}
                  {isUserLoggedIn &&  <li> <Link className="nav-item active nav-link" to="/BookList" >Books </Link> </li>}
              </ul>
              <ul className="navbar-nav navbar-collapse justify-content-end">
                  {!isUserLoggedIn &&  <li> <Link className="nav-item active nav-link" to="/login"  >Login </Link> </li>}
                  {isUserLoggedIn &&  <li> <Link className="nav-item active nav-link"  to="/logout" onClick={AuthenticationService.logout}>Logout </Link> </li>}
              </ul>
          </nav>
        </header>

      )
    }
  
  }
  
  export default withRouter(Header);  //added this to refresh menus
  