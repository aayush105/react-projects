import { useState } from 'react'

const useDisclouse = () => {
    const [ isOpen , setOpen ] = useState(false);
    const onOpen = () => {
        console.log("clicked")
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
  return { onClose, isOpen, onOpen };
}

export default useDisclouse;