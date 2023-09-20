import { nanoid } from "nanoid";
import  {useState } from "react";
import css from './ContactForm.module.css';
export const ContactForm=({onSubmit})=>{
  const[name,setName] = useState("");
  const[number,setNumber] = useState("");
     const handleChange = (event) => {
    const { name, value } = event.target;
      switch (name) {
         case 'name':
           setName(value);
           break;
         case 'number':
           setNumber(value);
           break;
         default:
           return;
       }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({name,number});
    setName("");
    setNumber("");
}
   
        const nameId = nanoid();
         const numberId = nanoid();
        return (
               <form onSubmit={handleSubmit} className={css.addContactForm}>
            <label className={css.label}>
              Name
                    <input
            id={nameId}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                onChange={handleChange}
                className={css.formInput}
          />
        </label>
        <label className={css.label}>
                    <input
                        id={numberId}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                onChange={handleChange}
                 className={css.formInput}
          />
        </label>
        <button type="submit" className={css.addContactButton}>Add contact</button>
      </form>
        )
    }
