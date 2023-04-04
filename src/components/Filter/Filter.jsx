import PropTypes from 'prop-types';
import sass from './Filter.module.scss';

export const Filter = ({ value, onFilter }) => {
  return (
    <div className={sass.wrapperFilter}>
      <label className={sass.labelFilter} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={sass.inputSearch}
        type="text"
        name="filter"
        id="filter"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
