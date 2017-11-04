import * as React from 'react'
import '../styles/WelcomePage.css'

export default class WelcomePage extends React.Component {

  render() {
    return (
      <div className="WelcomePage">
        <div className="diagonal"></div>
        <h1>Pay Your Pals</h1>
        <div className="topContent">
          <div className="left">
            <h2>Get people to pay for your events without the hassle</h2>
          </div>
          <div className="right">
            <a href="/createEvent"><button>Create a new event</button></a>
          </div>
        </div>
        <div className="line"></div>
        <div className="lowerContent">
          <div className="featureRow">
            <div className="featureIconContainer">
              <div className="featureIcon"></div>
            </div>
            <div className="featureText">
              This is a feature description
            </div>
          </div>
          <div className="featureRow">
            <div className="featureText">
              This is a feature description
            </div>
            <div className="featureIconContainer">
              <div className="featureIcon"></div>
            </div>
          </div>
          <div className="featureRow">
            <div className="featureIconContainer">
              <div className="featureIcon"></div>
            </div>
            <div className="featureText">
              This is a feature description
            </div>
          </div>
        </div>
      </div>
    )
  }

}