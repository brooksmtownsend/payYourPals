import * as React from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
      </Router>
    );
  }
}

export default App;
