import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'service/contactData';

export const ContactList = () => {
  const filterValue = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.contact);
  const dispatch = useDispatch();

  const filterContactsList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue);
  });
  return (
    <div>
      <ul>
        {filterContactsList.map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={()=> dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
