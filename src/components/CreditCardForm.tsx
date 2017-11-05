import * as React from 'react'
import '../styles/CreditCardForm.css'

export default class CreditCardForm extends React.Component<{match: any}, {}> {
  render() {
    let eventId = this.props.match.params.eventId
    return (
      <div className="CreditCardForm">
       <div className="form">
       <form onSubmit={() => {return false}} id='creditCardForm'>
           <label id='title'> Enter your information </label>
           <div id='inline'>
           <input type="text"  name="cardNumber" placeholder="Credit Card Number (no dashes or spaces)" maxLength={16}/>
             <input type="text" id='num' name="cvv" placeholder="CVV" maxLength={3}/>
             </div>
               <div id='inline'> <label id='labels'> Expiration Date:</label>
               <select id='tz' name="exprMonth">
               <option value="01">January</option>
               <option value="02">February </option>
               <option value="03">March</option>
               <option value="04">April</option>
               <option value="05">May</option>
               <option value="06">June</option>
               <option value="07">July</option>
               <option value="08">August</option>
               <option value="09">September</option>
               <option value="10">October</option>
               <option value="11">November</option>
               <option value="12">December</option>
                   </select>  
                <select id='tz1' name="exprYear">
                <option value="16"> 2016</option>
                <option value="17"> 2017</option>
                <option value="18"> 2018</option>
                <option value="19"> 2019</option>
                <option value="20"> 2020</option>
                <option value="21"> 2021</option>
              </select>
              <select id='tz2' name="cardType">
                <option value="16"> VISA</option>
                <option value="17"> Mastercard</option>
                <option value="18"> Amex</option>
              </select>
               </div>
         </form>
<<<<<<< HEAD
        <button onClick={grabCreditCardInfo}>Commit</button>
=======
        <button onClick={grabCreditCardInfo}>Create Event</button>
>>>>>>> Fixed some credit card styling, getting elements from credit card form
         </div>
         </div>
    )
  }
}

function grabCreditCardInfo() {
  let form = (document.getElementById('creditCardForm') as HTMLFormElement).elements
<<<<<<< HEAD
  let vals = {}
=======
  let vals = {'': ''}
>>>>>>> Fixed some credit card styling, getting elements from credit card form
  for (let i: number = 0; i < form.length; i++) {
    let item = form[i] as HTMLFormElement
    vals[item.name] = item.value
  }
  console.log(vals)
  // send out vals to server

  return false
}