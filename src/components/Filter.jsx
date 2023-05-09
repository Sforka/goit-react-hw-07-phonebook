import { useDispatch } from 'react-redux';
import { update } from 'redux/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/selectors';


export const Filter = () => {
  const dispatch = useDispatch()
  const filterValue = useSelector(selectFilteredContacts);
  return (
    <div>
      <label>Find contacts by name </label>
      <input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filterValue}
        onChange={e => dispatch(update(e.target.value))}
      />
    </div>
  );
};
