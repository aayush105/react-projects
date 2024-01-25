import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import { FaSearch } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import Modal from './components/Modal';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';

const App = () => {

  const [ contacts, setContacts ] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapshot = await getDocs(contactsRef);

        onSnapshot(contactsRef, (snapshot) => {
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactList);
          return contactList;
        })
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
      onSnapshot(contactsRef, (snapshot) => {
        const contactLists = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        const filteredContacts = contactLists.filter((contact) => 
          contact.name.toLowerCase().includes(value.toLowerCase())
        );

        setContacts(filteredContacts);
        return filteredContacts;
      });
  }

  return (
  <>
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar />
      <div className='flex gap-2'>
        <div className='flex relative flex-grow items-center'>
        <FaSearch className='text-white text-3xl absolute ml-2'/>
          <input 
            onChange={filterContacts}
            type="text" 
            className='h-10 flex-grow bg-transparent border border-white 
            rounded-md text-white pl-10' 
          />  
        </div>
        <AiFillPlusCircle 
          onClick={onOpen}
          className='text-white text-5xl cursor-pointer'/>
      </div>
      <div className='mt-4 gap-3 flex flex-col'>
        { contacts.length<=0 ? (
          <NotFoundContact/>
          ) : (
            contacts.map((contact) => (
            <ContactCard 
              key={contact.id}
              contact={contact}
            />
          )))
        }
      </div>
    </div>
    <AddAndUpdateContact
      onClose={onClose}
      isOpen={isOpen}
    />
    <ToastContainer
      position='bottom-center'
    />
  </>
  )
}

export default App;