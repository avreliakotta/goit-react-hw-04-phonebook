import { ContactItem } from "components/ContactItem/ContactItem";
import css from './ContactList.module.css'
export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.contactList}>
            {contacts.map(({ id,name,number}) => {
                return (
                    <ContactItem  key={id} id={id} name={name} number={number}onDelete={()=>onDelete(id) } />
                )
            })}
        </ul>
    )
}