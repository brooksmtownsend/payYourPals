import * as React from 'react'
import '../styles/CreateEventPage.css'
import CreditCardForm from './CreditCardForm'

export default class CreateEventPage extends React.Component {
  render() {
    return (
      <div className="CreateEventPage">
        <div className="form">
          <form>
            <fieldset>
              <legend><span className="number">1</span> Event Info</legend>
              <input type="text" name="eventName" placeholder="Event Name *"/>
                <input type="text" name="location" placeholder="Location *"/>
                  <input type="text" name="location" placeholder="Location *"/>
                  <textarea name="description" placeholder="Event Description *"></textarea>
                  <div id='inline'> <label id='labels'> Start *:</label>
                  <input type="datetime-local" id='datetime' name="startDatetime"/> 
                  <select id="timeZone" name="timeZones">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <div id='inline'> <label id='labels'> End *:</label>
                  <input type="datetime-local" id='datetime' name="startDatetime"/> 
                  <select id="timeZone" name="timeZones">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <input type="text" name="addCohost" placeholder="Add cohosts (separated by commas)"/> 
                  <div id='inline'><label id='labels'> Upload Cover Photo: </label> <input type="file" id='coverPhoto' name="coverPhoto" accept="image/*" /> </div>
            </fieldset>
                <fieldset>
                  <legend><span className="number">2</span> Choose Goals </legend>
                  <textarea name="field3" placeholder="Describe your payment goals to your guests"></textarea>
                  <input type="number"  name="minAttendees" placeholder="Set minimum number of attendees"/>
                  <input type="number" name="maxAttendees" placeholder="Set maximum number of attendees"/>
                  <div id='inline'> <label id='labels'> Set Transaction Time:</label>
                  <input type="datetime-local" id='datetime' name="startDatetime"/> 
                  <select id="timeZone" name="timeZones">
                      <option value="PST">PST</option>
                      <option value="EST">EST</option>
                      <option value="CST">CST</option>
                      <option value="MST">MST</option>
                      </select>  
                  </div>
                  <label id='labels'> Choose option 1 or 2 *</label>
                  <div id='inline'> <label id='labels'> 1) Require set payment amount per person:</label>
                  <input type="number" id='num' name="perPersonAmt" placeholder="ex: 5"/>
                  <label id='labels'> dollars</label>
                  </div>
                  <div id='inline'> <label id='labels'> 2) Set overall funding goal:</label>
                  <input type="number" id='num' name="overallFunding" placeholder="ex: 200"/>
                  <label id='labels'> dollars</label>
                  </div>
                </fieldset>
                <input type="submit" value="Create Event" />
                <label id='labels'> * All fields with an asterix are required</label>
            </form>
            </div>
          </div>
          );
      }
}