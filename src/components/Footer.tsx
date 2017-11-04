import * as React from 'react'
import '../styles/Footer.css'

export default class Footer extends React.Component {

  render() {
    return (
      <div className="Footer">
        <span>Created by </span>
        <a href="https://github.com/brooksmtownsend">Brooks Townsend</a>
        <a href="https://github.com/kate-goldenring">Kate Goldenring</a>
        <a href="https://github.com/hankhester">Hank Hester</a>
      </div>
    )
  }
}