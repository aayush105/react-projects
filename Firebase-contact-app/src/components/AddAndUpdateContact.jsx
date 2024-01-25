import { ErrorMessage, Field, Form, Formik } from "formik";
import Modal from './Modal'
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";


const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
})

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("Contact Added succesfully")
        } catch (error) {
            console.log(error);
        }
    };

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Contact Updated succesfully")
        } catch (error) {
            console.log(error);
        }
    };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <Formik
        validationSchema={contactSchemaValidation}
        initialValues={ 
            isUpdate 
                ?{
                name: contact.name,
                email: contact.email,
            } 
            :{
                name:"",
                email:"",
            }
        }
        onSubmit={(values) => {
            console.log(values);
            isUpdate?
            updateContact(values,contact.id) :
            addContact(values);
        }}
      >
        <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field name="name" className="border h-10 border-gray-800 rounded-md" />
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="name"/>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Field name="email" className="h-10 border border-gray-800 rounded-md" />
                <div className="text-red-500 text-xs">
                    <ErrorMessage name="email"/>
                </div>
            </div>
            <button className="bg-orange px-3 py-1.5 border border-gray-800 self-end">
                {isUpdate ? "Update" : "Add"} contact
            </button>
        </Form>
      </Formik>
    </Modal>
  )
}

export default AddAndUpdateContact