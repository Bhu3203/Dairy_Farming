// import React from 'react'

// export default function Milk_Schedule() {
//   return (
//     <>
//     <div class="header">
//     <h1>Milk Collection System</h1>
//     <div>
//       <span>Themes -</span>
//       <span>Kanji Patel</span>
//       <span>Mo: 7874944404</span>
//     </div>
//   </div>

//   <div class="container">
//     <div class="form-section">
//       <div class="form-group">
//         <label>Number</label>
//         <input type="text" name="number" placeholder="Enter number"/>
//       </div>
//       <div class="form-group">
//         <label>Name</label>
//         <input type="text" name="name" placeholder="Enter name"/>
//       </div>
//       <div class="form-group">
//         <label>Liters</label>
//         <input type="text" name="liters" placeholder="Enter liters"/>
//       </div>
//       <div class="form-group">
//         <label>Fat</label>
//         <input type="text" name="fat" placeholder="Enter fat"/>
//       </div>
//       <div class="form-group">
//         <label>SNF</label>
//         <input type="text" name="snf" placeholder="Enter SNF"/>
//       </div>
//       <div class="form-group">
//         <label>Price / Liter</label>
//         <input type="text" name="price_per_liter" placeholder="Enter price"/>
//       </div>
//       <div class="form-group">
//         <label>Payment</label>
//         <input type="text" name="payment" placeholder="Enter payment"/>
//       </div>
//     </div>

//     <button>Search and Print</button>

//     <h2>Enter Member Number</h2>
//     <div class="form-section">
//       <div class="form-group">
//         <label>Buffalo</label>
//         <input type="text" name="buffalo" placeholder="Enter buffalo details"/>
//       </div>
//       <div class="form-group">
//         <label>Cow</label>
//         <input type="text" name="cow" placeholder="Enter cow details"/>
//       </div>
//     </div>

//     <table>
//       <thead>
//         <tr>
//           <th>Number</th>
//           <th>Name</th>
//           <th>Animal</th>
//           <th>Liters</th>
//           <th>Fat</th>
//           <th>SNF</th>
//           <th>Price</th>
//           <th>Payment</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td colspan="8" style="text-align: center;">No data available</td>
//         </tr>
//       </tbody>
//     </table>

//     <div class="footer-buttons">
//       <button>Edit</button>
//       <button>Print Slip</button>
//       <button>Report Shift</button>
//       <button>Local Sale</button>
//     </div>
//   </div>
//     </>
//   )
// }


import React from 'react';

const MilkCollectionSystem = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: '#dfe6e9',
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1>Milk Collection System</h1>
        <div>
          <span>Themes -</span>
          <span>Kanji Patel</span>
          <span>Mo: 7874944404</span>
        </div>
      </div>

      <div style={{ padding: '15px', backgroundColor: 'white' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <label>Number</label>
            <input
              type="text"
              name="number"
              placeholder="Enter number"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginRight: '20px' }}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginRight: '20px' }}>
            <label>Liters</label>
            <input
              type="text"
              name="liters"
              placeholder="Enter liters"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginRight: '20px' }}>
            <label>Fat</label>
            <input
              type="text"
              name="fat"
              placeholder="Enter fat"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
        </div>

        <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Search and Print
        </button>

        <h2>Enter Member Number</h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <div style={{ marginRight: '20px' }}>
            <label>Buffalo</label>
            <input
              type="text"
              name="buffalo"
              placeholder="Enter buffalo details"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
          <div style={{ marginRight: '20px' }}>
            <label>Cow</label>
            <input
              type="text"
              name="cow"
              placeholder="Enter cow details"
              style={{ width: '150px', padding: '5px', marginBottom: '10px' }}
            />
          </div>
        </div>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '10px',
          }}
        >
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Number</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Animal</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Liters</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Fat</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>SNF</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Price</th>
              <th style={{ border: '1px solid #ccc', padding: '8px', backgroundColor: '#dfe6e9' }}>Payment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan="8"
                style={{
                  textAlign: 'center',
                  padding: '8px',
                  border: '1px solid #ccc',
                }}
              >
                No data available
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: '15px' }}>
          <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
            Edit
          </button>
          <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
            Print Slip
          </button>
          <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
            Report Shift
          </button>
          <button style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Local Sale
          </button>
        </div>
      </div>
    </div>
  );
};

export default MilkCollectionSystem;
