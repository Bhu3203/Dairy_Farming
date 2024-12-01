import React from 'react'
import "./Farmer_Reg.css"
export default function Farmer_Registration() {
  return (
    <>
    <div class="container">
   <h1>Farmer Registration</h1>
   
   <div className='form'>
   <form action="/submit-farmer-details"  method="POST">

<div class="form-group">
   {/* <!-- Row 1: Name and Username --> */}
   <div class="input-pair">
       <label htmlFor="name">Enter Name:</label>
       <input type="text" name="name" className="inp" placeholder="Enter your full name" required />
   </div>
   <div class="input-pair">
       <label htmlFor="">Username:</label>
       <input type="text" name="" id="" placeholder="Username" />
   </div>

   {/* <!-- Row 2: Mobile No and Password --> */}
   <div class="input-pair">
       <label htmlFor="">Mobile No:</label>
       <input type="number" name="" id="" placeholder="Enter Mobile No" required />
   </div>
   <div class="input-pair">
       <label htmlFor="">Password:</label>
       <input type="password" name="" id="" placeholder="Password" />
   </div>

   {/* <!-- Row 3: Email and Address --> */}
   <div class="input-pair">
       <label htmlFor="">Email:</label>
       <input type="email" name="" id="" placeholder="Enter Email" />
   </div>
   <div class="input-pair">
       <label htmlFor="">Address:</label>
       <input type="text" placeholder="Address" />
   </div>
   <button type="submit" id="btn">Submit</button>
</div>    
   </form>
   <form action="/submit-farmer-bank-details" method="POST">
            {/* <!-- Bank Details --> */}
            <h2>Bank Details</h2>
       <div class="form-group">
           <div class="input-pair">
               <label for="bank_name">Bank Name</label>
               <input type="text" id="bank_name" name="bank_name" placeholder="Enter bank name" required/>
           </div>
           <div class="input-pair">
               <label for="account_number">Account Number</label>
               <input type="text" id="account_number" name="account_number" placeholder="Enter account number" required/>
           </div>
       
       
           <div class="input-pair">
               <label for="ifsc_code">IFSC Code</label>
               <input type="text" id="ifsc_code" name="ifsc_code" placeholder="Enter IFSC code" required/>
           </div>
           <div class="input-pair">
               <label for="branch_name">Branch Name</label>
               <input type="text" id="branch_name" name="branch_name" placeholder="Enter branch name" required/>
           </div>
       
       <div className='input-pair'>

       <label for="account_holder_name">Account Holder Name</label>
       <input type="text" id="account_holder_name" name="account_holder_name" placeholder="Enter account holder name" required/>
       </div>
       <div className='input-pair'>

       <label for="account_holder_name">Account Holder Name</label>
       <input type="text" id="account_holder_name" name="account_holder_name" placeholder="Enter account holder name" required/>
       </div>

       {/* <!-- Submit Button --> */} 
        <button type="submit" id="btn">Register</button>
        </div>
   </form>
   </div>

</div>


   </>
  )
}
