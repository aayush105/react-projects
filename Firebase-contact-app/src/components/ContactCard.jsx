import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from '../config/firebase'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { toast } from 'react-toastify'

const ContactCard = ( { contact } ) => {

  const { isOpen, onClose, onOpen } = useDisclouse(); // custom hooks for handling those funtion

  const deleteContact = async (id) =>{
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact deleted succesfully")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        className='bg-yellow flex justify-between items-center rounded-lg p-2'
        key={contact.id}
      >
        <div className='flex gap-2'>
          <HiOutlineUserCircle className='text-orange text-4xl'/>
          <div className=''>
            <h2 className='font-medium'>{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>
          </div>
        </div>
        <div className='flex text-3xl gap-1'>
          <RiEditCircleLine 
            onClick={onOpen} 
            className='cursor-pointer'
          />
          <FaTrash 
            onClick={() => deleteContact(contact.id)} 
            className='text-orange cursor-pointer'
          />
        </div>
      </div>
      <AddAndUpdateContact 
        contact={contact}
        isUpdate 
        isOpen={isOpen} 
        onClose={onClose} 
      />
    </>
  )
}

export default ContactCard