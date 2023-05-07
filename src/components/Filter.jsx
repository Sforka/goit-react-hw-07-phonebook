import { useDispatch } from 'react-redux';
import { update } from 'redux/filterSlice';
import { useSelector } from 'react-redux';

export const Filter = () => {
  const filterValue = useSelector(state => state.filter.value);
  const dispatch = useDispatch()
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
