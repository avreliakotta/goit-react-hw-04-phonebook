import { nanoid } from "nanoid";
import React, { Component } from "react";
import css from './ContactForm.module.css';
export class ContactForm extends Component{
    state = {
        name: "",
        number:""
    }
     handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]:value
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
      const { name, number } = this.state;
      this.props.onSubmit({name,number});
      this.setState({
        name: "",
        number:""
      })
}
    render() {
        const nameId = nanoid();
         const numberId = nanoid();
        return (
               <form onSubmit={this.handleSubmit} className={css.addContactForm}>
            <label className={css.label}>
              Name
                    <input
            id={nameId}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                onChange={this.handleChange}
                className={css.formInput}
          />
        </label>
        <label className={css.label}>
                    <input
                        id={numberId}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
                onChange={this.handleChange}
                 className={css.formInput}
          />
        </label>
        <button type="submit" className={css.addContactButton}>Add contact</button>
      </form>
        )
    }
}