import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WelcomePage from './components/WelcomePage'
import CreateEventPage from './components/CreateEventPage'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'

ReactDOM.render((
    <Router>
      <div>
        <Header />
<<<<<<< HEAD
        <Route path={'/'} component={WelcomePage} />
        <Route path={'/createEvent'} component={CreateEventPage} />
=======
        <Route exact path={'/'} component={WelcomePage} />
        <Route exact path={'/createEvent'} component={CreateEventPage} />
>>>>>>> feature/implement_welcome_page
        <Footer />
      </div>
    </Router>
  ), document.getElementById('root') as HTMLElement
);
registerServiceWorker();
