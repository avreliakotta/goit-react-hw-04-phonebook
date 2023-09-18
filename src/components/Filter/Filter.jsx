import css from './Filter.module.css';
export const Filter = ({ filterContacts }) => {
  const handleChange = ({ target: { value } }) => {
    filterContacts(value);
  }

  return (
    <div>
      <label className={css.filterLabel}>Find contacts by name
        <input type="text" name="filter" onChange={handleChange} className={css.filterInput} />
      </label>
    </div>
  );
}
