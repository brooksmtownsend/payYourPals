import * as React from 'react'
import '../styles/Header.css'
import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response) => {
  console.log('Facebook response incoming')
  console.log(response);
}

export default class Header extends React.Component {

  render() {
    return (
      <div className="Header">
        <h1>Pay Your Pals</h1>
        <div className="FacebookLogin">
          <FacebookLogin 
            appId='139629923459386'
            autoLoad={true}
            fields='name, email, picture'
            scope='public_profile, user_friends'
            callback={responseFacebook} 
          />
        </div>
      </div>
    )
  }
}

/**
 * Documentation for the FacebookLogin component:
 * https://www.npmjs.com/package/react-facebook-login
 */