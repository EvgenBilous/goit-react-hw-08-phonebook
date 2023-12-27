import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { removeContact } from '../../redux/contacts/operations';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  const filtered = handleFilterContacts();
  return (
    <ul>
      {filtered.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <span>
              {' '}
              {name} : {number}
            </span>{' '}
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
