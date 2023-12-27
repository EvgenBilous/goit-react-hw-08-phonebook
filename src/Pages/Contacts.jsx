import ContactsList from 'components/ContactsList/ContactsList';
import { Container } from 'components/Container/Container';
import PhoneBook from 'components/PhoneBook/PhoneBook';
import SearchFilter from 'components/SearchFilter/SearchFilter';
import Section from 'components/Section/Section';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return (
    <Container>
      <Section title={'PhoneBook'}>
        <PhoneBook />
      </Section>
      <Section title={'Contacts'}>
        <SearchFilter />
        <ContactsList />
      </Section>
      {isLoading && <div>Loading</div>}
      {error && <p>{error}</p>}
    </Container>
  );
};

export default Contacts;
