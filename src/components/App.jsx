import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';

import { useSelector } from 'react-redux';

export const App = () => {
  const loading = useSelector(state => state.contacts.pending);

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactsList />
        {loading && <h4>In progress...</h4>}
      </Section>
    </>
  );
};
