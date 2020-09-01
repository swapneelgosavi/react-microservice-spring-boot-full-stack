import React , {Component} from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  
    render() {
      return (
        <>              
              <div className="container">
                    <h1>Welcome {this.props.match.params.name}</h1> 
                    To manage books click <Link to="/booklist">here</Link>.
              </div>

        </>

      )
    }
  
  }
  
  export default Welcome;
  