import * as React from 'react'
import '../styles/EventPage.css'
import '../styles/CreateEventPage.css'
import CreditCardForm from './CreditCardForm'

export default class EventPage extends React.Component<{match: any}, {}> {
  render() {
    let eventInformation = this.props.match.params.eventId
    // Fetch event ID from server rn
    fetch('/ourapi/request', {
      method: 'get',
      body: 'some-body',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(r => {
        console.log(res)
      })
    }).catch(err => console.log(err))
    return (
      <div className="EventPage">
        <div className="mainDiv">
          <img src='http://www.southernnmlaw.com/wp-content/uploads/2015/07/549527_400551523333307_1869688604_n.jpg' alt='event picture' />
          <h1>{'Event Name'}</h1>
          <p>{'Hosts'}</p>
          <h3>{'Location'}</h3>
          <p>{'Description'}</p>
          <p>{'Start Time'}</p>
          <p>{'End Time'}</p>
          <h2>{'Total Event Cost: $amt'}</h2>
          <h3>{'Cost at (min) attendees: $amt'}</h3>
          <h3>{'Cost at (max): $amt'}</h3>
          <h4>{'Committed attendee\'s names'}</h4>
          <br />
        </div>
        <CreditCardForm/>
      </div>
      );
  }
}