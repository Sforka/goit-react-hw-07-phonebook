import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'service/contactData';
import {
  selectFilteredContacts,
  selectContacts,
} from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContact } from 'service/contactData';

export const ContactList = () => {
  const filterValue = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  console.log(contacts);


  const filterContactsList = contacts.filter(contact => {
    console.log(contact)
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
