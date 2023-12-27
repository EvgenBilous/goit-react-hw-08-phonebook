import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { newContact } from '../../redux/contacts/operations';

const PhoneBook = () => {
  const [state, setState] = useState({ name: '', number: '' });

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleChangeInputsForm = event => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const addContact = ({ name, number }) => {
    //const idShortid = shortid.generate();
    const isDuplicateContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicateContact) {
      alert(`${name} is already in contacts `);
      return;
    }
    const contact = {
      name,
      number,
    };
    const action = newContact(contact);
    dispatch(action);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(state);

    setState({ name: '', number: '' });
  };

  const { name, number } = state;

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChangeInputsForm}
          type="text"
          name="name"
          minLength={2}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={name}
        />
      </label>
      <label>
        Number
        <input
          onChange={handleChangeInputsForm}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default PhoneBook;
