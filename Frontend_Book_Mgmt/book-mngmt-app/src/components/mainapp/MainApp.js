import React , {Component} from 'react';
import Header from '../headerfooter/Header';
import Footer from '../headerfooter/Footer';
import Login from '../login/Login';
import Logout from '../login/Logout';
import Welcome from '../bookmgmt/Welcome';
import BookList from '../bookmgmt/BookList';
import '../../bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from '../authenticateroute/AuthenticateRoute';
import ErrorComponent from '../ErrorComp/ErrorComponent';
import CreateBook from '../bookmgmt/CreateBook';


class MainApp extends Component {
  
    render() {
      return (
          <div>           

              <Router>
                
                <Header/>

                <Switch>
                  <Route path="/" exact component={Login}/>
                  <Route path="/login" component={Login}/>
                  <AuthenticatedRoute path="/welcome/:name" component={Welcome}/>
                  <AuthenticatedRoute path="/BookList" component={BookList}/>
                  <AuthenticatedRoute path="/logout" component={Logout}/>
                  <AuthenticatedRoute path="/book/:id" component={CreateBook}/>

                  <Route component={ErrorComponent}/>

                </Switch>
                
                <Footer/>

              </Router>

            
            
          </div>
          
      )
    }
  
  }
  
  export default MainApp;
  