import * as React from 'react'
import '../styles/CreateEventPage.css'
import CreditCardForm from './CreditCardForm'
import Header from './Header'
import { Link } from 'react-router-dom'

export default class CreateEventPage extends React.Component<{}, {eventId: number, linkCreated: boolean}> {

  constructor() {
    super()
    this.state = {
      eventId: 9999,
      linkCreated: false
    }

    this.grabCreateEventInfo = this.grabCreateEventInfo.bind(this)
  }

  render() {
    return (
      <div className="CreateEventPage">
        <Header />
        <div className="form">
          <form id='createEventForm' onSubmit={() => {return false}}>
            <fieldset id='testFieldSetThing'>
              <legend><span className="number">1</span> Event Info</legend>
              <input type="text" name="eventName" placeholder="Event Name *"/>
                <input type="text" name="location" placeholder="Location *"/>
                  <textarea name="description" placeholder="Event Description *"></textarea>
                  <div id='inline'> <label id='labels'> Start *:</label>
                  <input type="datetime-local" id='datetime' name="startDatetime"/> 
                  <select id="timeZone" name="timeZone">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <div id='inline'> <label id='labels'> End *:</label>
                  <input type="datetime-local" id='datetime' name="endDatetime"/> 
                  <select id="timeZone" name="timeZones">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <input type="text" name="cohosts" placeholder="Add cohosts (separated by commas)"/> 
                  <div id='inline'><label id='labels'> Upload Cover Photo: </label> <input type="file" id='coverPhoto' name="coverPhoto" accept="image/*" /> </div>
            </fieldset>
                <fieldset>
                  <legend><span className="number">2</span> Choose Goals </legend>
                  <textarea name="justification" placeholder="Describe your payment goals to your guests"></textarea>
                  <input type="number"  name="minAttendees" placeholder="Set minimum number of attendees"/>
                  <input type="number" name="maxAttendees" placeholder="Set maximum number of attendees"/>
                  <div id='inline'> <label id='labels'> Set Transaction Time:</label>
                  <input type="datetime-local" id='datetime' name="transactionTime"/> 
                  <select id="timeZone" name="timeZones">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <label id='labels'> Choose option 1 or 2 *</label>
                  <div id='inline'> <label id='labels'> 1) Require set payment amount per person:</label>
                  <input type="number" id='num' name="amountPerPerson" placeholder="ex: 5"/>
                  <label id='labels'> dollars</label>
                  </div>
                  <div id='inline'> <label id='labels'> 2) Set overall funding goal:</label>
                  <input type="number" id='num' name="fundingGoal" placeholder="ex: 200"/>
                  <label id='labels'> dollars</label>
                  </div>
                </fieldset>
                <label id='labels'> * All fields with an asterix are required</label>
            </form>
            <button onClick={this.grabCreateEventInfo}>Create Event</button>
            {this.state.linkCreated && <Link className="eventLink" to={'/event/:' + this.state.eventId}> Click here to view your event! </Link>}
            </div>
          </div>
          );
      }
      grabCreateEventInfo(): boolean {
        let form = (document.getElementById('createEventForm') as HTMLFormElement).elements
        let vals: any = {};
        console.log(form.length)
        for (let i = 0; i < form.length; i++) {
          let element = form[i] as HTMLFormElement
          vals[element.name] = element.value
        }
      
        vals.coverPhotoUrl = 'coverPhoto'
        vals.minAttendees = vals.minAttendees as number || 0
        vals.maxAttendees = vals.maxAttendees as number || 0
        vals.amountPerPerson = vals.amountPerPerson as number || 0
        vals.fundingGoal = vals.fundingGoal as number || 0
      
        console.log(vals)
        fetch('/api/api.cgi/createEvent', {
          method: 'put',
          body: JSON.stringify(vals),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(res => {
          res.json().then(r => {
              this.setState({
                linkCreated: true,
                eventId: r.eventId[0]
              })
          })
        }).catch(err => console.log(err))
      
        return false
      }
}