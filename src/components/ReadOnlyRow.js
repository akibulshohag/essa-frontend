import React from 'react'

const ReadOnlyRow = ({contact}) => {
  console.log('contact........',contact)
  return (
    
        <tr>
              <td>{contact.fullName}</td>
              <td>{contact.address}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
   
  )
}

export default ReadOnlyRow