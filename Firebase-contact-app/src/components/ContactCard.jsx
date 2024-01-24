import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'

const ContactCard = ( { contact } ) => {
  return (
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
        <RiEditCircleLine />
        <FaTrash className='text-orange'/>
      </div>
    </div>
  )
}

export default ContactCard