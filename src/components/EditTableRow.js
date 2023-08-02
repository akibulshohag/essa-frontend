import React from 'react'

const EditTableRow = () => {
  return (
    <tr>
        <td>
        <input
          name="fullName"
          type="text"
          placeholder="Enter Your FullName"
          required="required"
        /> 
        </td>
        <td>
        <input
          name="address"
          type="text"
          placeholder="Enter Your Address"
          required="required"
        />
        </td>
        <td>
        <input
          name="phoneNumber"
          type="text"
          placeholder="Enter Your PhoneNumber"
          required="required"
        />
        </td>
        <td>
            <input
          name="email"
          type="text"
          placeholder="Enter Your Email"
          required="required"
        />
        </td>
    </tr>
  )
}

export default EditTableRow