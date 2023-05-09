
import { Section } from './Section';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';

export function App() {
  
  return (
    <div>

      <Section title="Phonebook">
        <ContactForm/>
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
}
