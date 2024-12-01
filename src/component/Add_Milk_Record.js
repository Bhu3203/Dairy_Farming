import React from "react";
import "./Add_Milk_Record.css";
import  milk_can from "../assets/milk-can.jpg"
export default function Add_Milk_Record() {
  return (
    <>
      {/* <div className="container"> */}
      <div className="header d-flex justify-content-between align-items-center p-3">
  {/* Anchor Tags on the Left */}
  <div className="nav-links">
    <a className="nav-link" href="/">Generate Bills</a>
    <a className="nav-link" href="/">Loan/Feed</a>
  </div>

  {/* Admin Dropdown on the Right */}
  <div className="dropdown">
    <button
      className="btn btn-secondary dropdown-toggle"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Admin
    </button>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="/milk">Farmer</a>
      </li>
      <li>
        <a className="dropdown-item" href="/">User</a>
      </li>
    </ul>
  </div>
</div>
      <div className="container1">
      <div className="row">
        <div className="col-xl-4  milk-collection">
          <form action="">
            
          <label htmlFor="">Time</label>
          <select id="cattle_type" name="cattle_type" required>
        <option value="cow">M</option>
        <option value="buffalo">E</option>
    </select>
          <label htmlFor="">Cattle</label>
          <select id="cattle_type" name="cattle_type" required>
        <option value="cow">Cow</option>
        <option value="buffalo">Buffalo</option>
    </select> <br />
       
            <label htmlFor="">Id No:</label>
            <input type="text" /><br />
            <label htmlFor="">Name:</label>
            <input type="" className="name" /> <br />
            <label htmlFor="">Litre:</label>
            <input type="number" /> <br />
            <label htmlFor="">Fat:</label>
            <input type="Number" /> <br />
            <label htmlFor="">SNF:</label>
            <input type="number" /> <br />
            <label htmlFor="">P/Lit</label>
            <input type="number" name="" id="" /> <br />
            <label htmlFor="">Tamt</label>
            <input type="number" name="" id="" /> <br />
            <button type="submit">Save</button>
          </form>
        </div>
        {/* <div className="Table1"> */}

        <div className="col-xl-8  Table">
          <table>
            <thead>
              <tr>
                <th>Id No</th>
                <th>Time</th>
                <th>Animal</th>
                <th>Name</th>
                <th>Liters</th>
                <th>Fat</th>
                <th>SNF</th>
                <th>Price/Liter</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>M</td>
                <td>Buffalo</td>
                <td>Banerjee</td>
                <td>20.00</td>
                <td>4.00</td>
                <td>6.70</td>
                <td>45.00</td>
                <td>200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <div class="table-container"> */}
      <div class="row">
        <div class="col-xl-4 milk-collection">
          <img src={milk_can} alt=""  className="img-fluid"/>
        </div>
        <div class="col-xl-8">
          <table>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Milk (Ltr)</th>
                <th>Payment</th>
                <th>Average Fat</th>
                <th>Member</th>
                <th>F7 Manual Liters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Buffalo</td>
                <td>20.00</td>
                <td>280.00</td>
                <td>5.00</td>
                <td>1</td>
                <td>Manual Liters</td>
              </tr>
              <tr>
                <td>Cow</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>0.00</td>
                <td>0</td>
                <td>Manual Fat</td>
              </tr>
              <tr>
                <td>Total</td>
                <td>20.00</td>
                <td>280.00</td>
                <td>5.00</td>
                <td>1</td>
                <td>Empty</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div class="footer-buttons">
            <span>F5 Edit</span>
            <span>F6 Print Slip</span>
            <span>F10 Report Shift</span>
            <span>F11 Local Sale</span>
        </div> */}
      </div>
      </div>
      {/* </div> */}
    </>
  );
}