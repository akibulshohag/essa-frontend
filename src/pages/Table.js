import React, { useState, Fragment } from "react";
import "../styles/Table.css";
import tablelist from "../helpers/Tablelist";
import ReadOnlyRow from '../components/ReadOnlyRow'
import EditTableRow from "../components/EditTableRow"




const Table = () => {
  const [contacts, setcontacts] = useState(tablelist);
  const [addFormData, setaddFormData] = useState({
    fullName:'',
    address:'',
    phoneNumber:'',
    email:''
  });

 const [editContactId, seteditContactId] = useState(null);


  const handleAddFormChange=(e)=>{
        e.preventDefault();

        const fieldName = e.target.getAttribute('name')
        const fieldValue = e.target.value;

        const newFormData ={...addFormData};
        newFormData[fieldName]= fieldValue;
        setaddFormData(newFormData);

  }

  const handleAddFormSubmit =(e)=>{
      e.preventDefault();

      const newContact ={
         
        fullName : addFormData.fullName,
        address : addFormData.address,
        phoneNumber: addFormData.phoneNumber,
        email: addFormData.email,
      }

      const newContacts =[ ...contacts, newContact];
      setcontacts(newContacts);
  }

  return (
    <div className="app-container">
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((contact) => (
            <Fragment>
              { editContactId === contact.id ? ( <editTableRow/>) : ( <ReadOnlyRow contact={contact}/> )}
              
            </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      <h2>Add New Data</h2>
      <form onSubmit={ handleAddFormSubmit}>
        <input
          name="fullName"
          type="text"
          placeholder="Enter Your FullName"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          name="address"
          type="text"
          placeholder="Enter Your Address"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          name="phoneNumber"
          type="number"
          placeholder="Enter Your PhoneNumber"
          required="required"
          onChange={handleAddFormChange}
        />
        <input
          name="email"
          type="text"
          placeholder="Enter Your Email"
          required="required"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      
    </div>
    
  );
};

export default Table;
