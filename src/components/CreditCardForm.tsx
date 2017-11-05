import * as React from 'react'
import '../styles/CreditCardForm.css'

export default class CreditCardForm extends React.Component {
  render() {
    return (
      <div className="CreditCardForm">
       <div className="form">
       <form id='cardInfoForm'>
           <label id='title'> Commit Financially</label>
           <div id='inline'>
             <label className='labels'> Maximum Amount Willing to Pay to Attend: </label>
           <input type="number"  id='max' name="maxAmount"/>
           </div>
           <input type="text"  name="cardOwber" placeholder="Card Owner"/>
           <div id='inline'>
           <input type="text"  name="cardNumber" placeholder="Credit Card Number"/>
             <input type="text" id='num' name="cvv" placeholder="CVV"/>
             </div>
               <div id='inline'> <label className='labels'> Expiration Date:</label>
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
         <button onClick={grabCreditInfo}> Commit To Event </button>
         </div>
         </div>
    )
  }
}
function grabCreditInfo(): boolean {
  let form = (document.getElementById('cardInfoForm') as HTMLFormElement).elements
  let vals = [];
  console.log("working")
  console.log(form.length)
  for (let i = 0; i < form.length; i++) {
    let element = form[i] as HTMLFormElement
    vals.push(element.name + ": " + element.value)
  }
  return false
}