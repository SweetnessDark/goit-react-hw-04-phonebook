import PropTypes from 'prop-types';
import sass from './ContactList.module.scss';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={sass.contactList}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li className={sass.contactItem} key={id}>
              <span className={sass.name}>{name}</span>
              <span className={sass.number}>{number}</span>
              <button
                className={sass.delBtn}
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,

  deleteContact: PropTypes.func.isRequired,
};
