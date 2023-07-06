import React from 'react'
import Cookies from 'js-cookie';
import FormDialog from './FormDialog';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import 'reactjs-popup/dist/index.css';
import { Button } from '@mui/material';
import EditForm from './EditForm';


function Contacts() {







  let contacts = []
  if (Cookies.get('contacts') !== undefined) {
    contacts = JSON.parse(Cookies.get('contacts'))
  }


  const HandleDelete = (e) => {
    let contacts = JSON.parse(Cookies.get('contacts'))
    contacts.splice(e.target.value, 1)
    Cookies.set('contacts', JSON.stringify(contacts))
    window.location.reload()

  }






  return (
    <>
      <FormDialog />
      
      <Table>
        <Thead>
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Phone Number</Th>
            <Th>email</Th>
          </Tr>
        </Thead>
        <Tbody>
        {contacts.map((contact, key) => (
          <Tr>
            <Td>{contact.name}</Td>
            <Td>{contact.lname}</Td>

            <Td>{contact.phone}</Td>
            <Td>{contact.email}</Td>
            <Button type="button" onClick={HandleDelete} variant="outlined" >Delete Contact</Button>
            <EditForm index={key} />
          </Tr>
        ))}
        </Tbody>
      </Table>
      




    </>
  )
}

export default Contacts



