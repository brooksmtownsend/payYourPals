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

class Test extends React.Component<{match: any} , {}> {
  render() {
    let text = this.props.match.params.additionalParams
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}

// Link tags for navigating to other pages (can be buttons etc)