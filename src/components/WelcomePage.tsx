import * as React from 'react'
import '../styles/WelcomePage.css'

const feature1Img = require('../images/feature1.png')
const feature2Img = require('../images/feature2.png')
const feature3Img = require('../images/feature3.png')

export default class WelcomePage extends React.Component {

  render() {
    return (
      <div className="WelcomePage">
        <div className="diagonal"></div>
        <h1>Pay Your Pals</h1>
        <div className="topContent">
          <div className="left">
            <h2>Get people to pay for your events without the hassle</h2>
            <h2>Commit to events without fear of overpaying</h2>
            <h2></h2>
          </div>
          <div className="right">
            <a href="/createEvent"><button>Create a new event</button></a>
          </div>
        </div>
        <div className="line"></div>
        <div className="lowerContent">
          <div className="featureRow">
            <div className="featureIconContainer">
              <img src={feature1Img} />
            </div>
            <div className="featureText">
              Afraid to host an event because you don't know if people will pay you back?
              Pay Your Pals requires attendees to commit financially to events!
            </div>
          </div>
          <div className="featureRow">
            <div className="featureText">
              Afraid to commit to paying for an event because you don't know if enough people will go to cover the cost?
              Pay Your Pals allows you to specify the maximum amount you are willing to pay!
            </div>
            <div className="featureIconContainer">
              <img src={feature2Img} />
            </div>
          </div>
          <div className="featureRow">
            <div className="featureIconContainer">
              <img src={feature3Img} />
            </div>
            <div className="featureText">
              Pay Your Pals removes financial uncertainty from an event whether you are the host or the attendee
            </div>
          </div>
        </div>
      </div>
    )
  }

}