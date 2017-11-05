import * as React from 'react'
import CreditCardForm from './CreditCardForm'
import '../styles/EventPage.css'
import '../styles/CreateEventPage.css'

export default class EventPage extends React.Component<{match: any}, {eventDetails: any, isHidden: boolean}> {

  constructor() {
    super()
    this.state = {
      isHidden: true,
      eventDetails: {}
    }
  }

  componentDidMount() {
    let eventId = this.props.match.params.eventId.slice(1)
    fetch('/api/api.cgi/events/' + eventId, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      res.json().then(r => {
        console.log(r)
        this.setState({
          isHidden: false,
          eventDetails: r.event
        })
      })
    }).catch(err => console.log(err))
  }

  render() {
    let minCost = Math.round(this.state.eventDetails[14] / this.state.eventDetails[10])
    let maxCost = Math.round(this.state.eventDetails[14] / this.state.eventDetails[11])

    return (
      <div>
        <div className="EventPage">
          <div className="mainDiv">
            <img src='http://www.southernnmlaw.com/wp-content/uploads/2015/07/549527_400551523333307_1869688604_n.jpg' alt='event picture' />
            <h1>{this.state.eventDetails[1]}</h1>
            <h2>{this.state.eventDetails[3]}</h2>
            <h3>{'Cost at ' + this.state.eventDetails[10] + ' attendees: $' + minCost}</h3>
            <h3>{'Cost at ' + this.state.eventDetails[11] + ' attendees: $' + maxCost}</h3>
            <h3>{this.state.eventDetails[2]}</h3>
            <h3>{'Start Date / Time : ' + this.state.eventDetails[4]}</h3>
            <h3>{'End Date / Time: ' + this.state.eventDetails[5]}</h3>
            <h3>{'Hosted by: ' + this.state.eventDetails[7]}</h3>
            <br />
          </div>
        </div>
        <CreditCardForm eventId={this.state.eventDetails[1]}/>
      </div>
      );
  }
}