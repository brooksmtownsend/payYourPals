import * as React from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* <Header /> */}
        {/* <Route path={'/'} component={WelcomePage} /> */}
        {/* <Route path={'/createEvent'} component={CreateEventPage} /> */}
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default App;
