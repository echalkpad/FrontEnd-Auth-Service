import React from 'react';
import Navbar from '../Navbar/navindex';

class App extends React.Component {

  render() {
    console.log('APPTHIS', this);
    if (this.props.auth === 'true') {
      return (
        <div>
          <Navbar hist={this.props.history}/>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          <a href="/auth/fitbit">FITBIT</a>
          <a href="/auth/jawbone">JAWBONE</a>
        </div>
      );
    }
  }
}

export default App;

