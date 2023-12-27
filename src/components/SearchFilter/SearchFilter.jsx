import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/slice';

const SearchFilter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return <input onChange={handleFilter} type="text" value={filter} />;
};

export default SearchFilter;
