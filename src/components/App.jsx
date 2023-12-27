import PhoneBook from './PhoneBook/PhoneBook';
import Section from './Section/Section';
import ContactsList from './ContactsList/ContactsList';
import SearchFilter from './SearchFilter/SearchFilter';
import { useEffect } from 'react';
import { getContacts } from '../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title={'PhoneBook'}>
        <PhoneBook />
      </Section>
      <Section title={'Contacts'}>
        <SearchFilter />
        <ContactsList />
      </Section>
      {isLoading && <div>Loading</div>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
