import styles from './Filter.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { filterContact } from '../../redux/Contacts/contacts-slice';
export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handlerInput = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <label className={styles.filterLabel}>
      Find contacts by name or phone-number
      <input
        className={styles.filterInput}
        type="text"
        name="filter"
        value={name}
        onChange={handlerInput}
      />
    </label>
  );
};
