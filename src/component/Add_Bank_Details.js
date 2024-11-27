import React from 'react'

export default function Add_Bank_Details() {
  return (
    <>
    <div>
      <h1>Bank Account Details</h1>
    <form action="/submit-bank-details" method="POST">
        <label for="bank_name">Bank Name</label>
        <input type="text" id="bank_name" name="bank_name" placeholder="Enter bank name" required/>

        <label for="account_number">Account Number</label>
        <input type="text" id="account_number" name="account_number" placeholder="Enter account number" required/>

        <label for="ifsc_code">IFSC Code</label>
        <input type="text" id="ifsc_code" name="ifsc_code" placeholder="Enter IFSC code" required/>

        <label for="branch_name">Branch Name</label>
        <input type="text" id="branch_name" name="branch_name" placeholder="Enter branch name" required/>

        <label for="account_holder_name">Account Holder Name</label>
        <input type="text" id="account_holder_name" name="account_holder_name" placeholder="Enter account holder name" required/>

    

        <button type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}
