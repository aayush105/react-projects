import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';

const App = () => {

  const [ contacts, setContacts ] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);
        const contactList = contactSnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactList);
      } catch (error) {
        
      }
    };
    getContacts();
  }, [])

  return (
  <div className='max-w-[370px] mx-auto px-4'>
    <Navbar />
    <div className='flex gap-2'>
      <div className='flex relative flex-grow items-center'>
      <FaSearch className='text-white text-3xl absolute ml-2'/>
        <input 
          className='h-10 flex-grow bg-transparent border border-white 
          rounded-md text-white pl-10' 
          type="text" 
        />  
      </div>
      <AiFillPlusCircle className='text-white text-5xl cursor-pointer'/>
    </div>
    <div className='mt-4 gap-3 flex flex-col'>
      {
        contacts.map((contact) => (
          <ContactCard 
            key={contact.id}
            contact={contact}
          />
        ))
      }
    </div>
  </div>
  )
}

export default App;