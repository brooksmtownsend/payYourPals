import * as React from 'react'
import '../styles/Header.css'
import FacebookLogin from 'react-facebook-login'
import graph from 'fb-react-sdk'

const logo = require('../images/PYP_trans.png')

const responseFacebook = (response) => {
  console.log('Facebook response incoming')
  console.log(response);

  graph.setAccessToken(response.accessToken);
  graph.setVersion('2.10')
  graph.get(response.id + "/friends", function(err: any, res: any) {
    console.log(res)
    console.log(res.data)
  })
  // This doesn't work because facebook api 2.0+ doesn't allow people to see the stuff
}

export default class Header extends React.Component<{hideTitle?: boolean}, {}> {

  render() {
    return (
      <div className="Header">
        <a href='/'>
          <img width="50" src={logo}/>
          <h1>Pay Your Pals</h1>
        </a>
        <div className="FacebookLogin">
          <FacebookLogin 
            appId='139629923459386'
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
 * 
 * Documentation for graph
 * https://www.npmjs.com/package/fb-react-sdk
 */