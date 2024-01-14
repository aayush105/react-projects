import Button from "../Button/Button";
import styles from "./ContactFrom.module.css";
import { MdMessage, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

const ContactFrom = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_button}>
                <Button 
                    text="VIA SUPPORT CHAT"
                    icon={<MdMessage fontSize="20px"/>}
                />
                <Button 
                    text="VIA CALL"
                    icon={<FaPhoneAlt fontSize="20px"/>}
                />
            </div>
            <Button 
                isOutline={true}
                text="VIA EMAIL FROM"
                icon={<MdEmail fontSize="24px"/>}
            />
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name"/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Text</label>
                    <textarea name="text" rows="8"/>
                </div>
                <div style={{
                    display:"flex",
                    justifyContent: "end"
                }}>
                    <Button 
                        isOutline={false}
                        text="SUBMIT"
                    />
                </div>
                <div>
                    {name + " " + email + " " + text}
                </div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/service.svg" alt="service" />
        </div>
    </section>
  )
}

export default ContactFrom